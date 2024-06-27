import { useState } from 'react';

interface IAddress {
  id: number;
  displayAddress: string;
}

export interface ICheckoutData {
  deliveryAddress: IAddress;
  billingAddress?: IAddress;
}

type ApiHook<T> = [
  () => Promise<void>,
  {
    data: T;
    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    onBillingAddressUpdate?: () => void;
  }
];

export const useCheckout = (): ApiHook<ICheckoutData | undefined> => {
  const [data, setData] = useState<ICheckoutData | undefined>();
  const [isError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getCheckoutInfo = async () => {
    setIsLoading(true);
    setData({
      deliveryAddress: {
        id: 1,
        displayAddress: '12 John Doe St, W12 5TH'
      },
      billingAddress: undefined
    });

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const onBillingAddressUpdate = () => {
    setData({
      deliveryAddress: data?.deliveryAddress as IAddress,
      billingAddress: {
        id: 2,
        displayAddress: '12 John Doe Billing St, W12 5TH'
      }
    });
  };

  return [
    getCheckoutInfo,
    { data, isError, isLoading, isSuccess, onBillingAddressUpdate }
  ];
};

export const useBrandOnePayment = (): ApiHook<undefined> => {
  const [isError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const makePayment = async () => {
    setIsLoading(true);

    makePayment();

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  return [
    makePayment,
    { data: undefined, isSuccess, isError, isLoading }
  ];
};

export const useBrandTwoPayment = (): ApiHook<undefined> => {
  const [isError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const makePayment = async () => {
    setIsLoading(true);

    makePayment();

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  return [
    makePayment,
    { data: undefined, isSuccess, isError, isLoading }
  ];
};
