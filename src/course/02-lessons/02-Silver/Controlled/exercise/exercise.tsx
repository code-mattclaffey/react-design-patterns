/* eslint-disable @typescript-eslint/ban-ts-comment */
import classNames from 'classnames';
// 💣 You can get rid of this eslint error comment when finished.
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Button } from '@shared/components/Button/Button.component';

interface IEvolutionModal {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  id: string;
  pokemon: {
    name: string;
    level: number;
    currentSprite: string;
  };
  evolution: {
    name: string;
    sprite: string;
    requirement: string;
  };
}

// For the full guide to making an accessible modal you can follow below to get every instance
// ♿️ WCAG Modal Resource: https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/examples/alertdialog/
// 💣 You can get rid of this eslint error comment when finished.
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EvolutionModal = ({
  isVisible,
  // 💣 You can get rid of this eslint error comment when finished.
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose,
  // 💣 You can get rid of this eslint error comment when finished.
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onConfirm,
  id,
  pokemon,
  evolution
}: IEvolutionModal) => {
  // 2a 💻 Create a useRef<HTMLDivElement> and bind the ref to the div on line 70

  useEffect(() => {
    // ✍🏻 When a modal is visible you want to navigate the focus from
    // the actioner (what caused the modal to open) to the content
    // ♿️ It helps the screenreader not get lost on the page
    // 2b - 💻 Check if isVisible is true and the modal.current is defined before setting focus to the modal
  }, [isVisible]);

  // 💣 You can get rid of this eslint error comment when finished.
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onModalPress = (event: React.MouseEvent) => {
    // You may have noticed how we have added an onClose event to the container
    // and that is because customers normally click out of the modal to leave,
    // but if they click within the modal happens. The event "bubbles" up to
    // the container div and it closes the modal. Which is janky behaviour
    // 🧪 When you finish, remove the onModal press from the modal and try to click inside the modal then add it back
    // ✍🏻 Stop propagation prevents an event from bubbling to the top.
    // ✍🏻 https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div
      className={classNames(
        'bg-modal-bg fixed top-0 left-0 right-0 bottom-0 justify-center items-center z-10'
        // 2c - 💄 Add an object as the second param with flex: isVisible and hidden !isVisible
      )}
      role="button"
      //  2d - 💻 Pass the onClose event from the props to the onClick event.
      tabIndex={0}
    >
      <div
        id={id}
        // 2e - Add the following HTML attributes to the div:
        // * ♿️ role="dialog" - this changes how the screenreader understands the html element
        // * ♿️ aria-labelledby={`evolution_title_${id}`} - so when focus lands the title is read out
        // * ♿️ aria-describedby={`evolution_body_${id}`} - so when focus lands the content is read out
        // 🤔 ⬆️ It's always good to make these unique with an id prop so you have unique ids on the page
        // * ♿️ aria-modal="true" - indicates whether an element is modal when displayed.
        // * ♿️ hidden={!isVisible} - we do not want the screenreader to pick this up when it's hidden
        // * ♿️ tabIndex={0} - allows the browser to focus on it via a keyboard
        // * onClick={onModalPress} - description in onModalPress.
        className="bg-white rounded-2xl p-6 relative z-20 max-w-md mx-4"
      >
        {/* ✍🏻 SUPER important for meeting the WCAG quidelines is that you need focus, but locked within this div */}
        {/* When focus is landed in this box with a keyboard you can no longer get out so make sure you have a close button */}
        {/* ♿️ Another requirement is to return focus to the actioner, but FocusLock does that for us when this component unmounts! 🦸🏻♀️ */}
        <FocusLock returnFocus={true}>
          <div>
            {/* 2f - 👨🏻💻♿️ Add id={`evolution_title_${id}`} - this creates the relationship between the title and modal */}
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-800">
              ✨ Evolution Time! ✨
            </h2>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <img
                    src={pokemon.currentSprite}
                    alt={pokemon.name}
                    className="w-20 h-20 mx-auto"
                  />
                  <p className="font-bold">{pokemon.name}</p>
                  <p className="text-sm text-gray-600">
                    Level {pokemon.level}
                  </p>
                </div>

                <div className="text-4xl">→</div>

                <div className="text-center">
                  <img
                    src={evolution.sprite}
                    alt={evolution.name}
                    className="w-20 h-20 mx-auto"
                  />
                  <p className="font-bold">{evolution.name}</p>
                  <p className="text-xs text-blue-600">
                    {evolution.requirement}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              {/* 2g - 💻 Add onClick={onConfirm} for evolution confirmation */}
              <Button className="bg-green-600 hover:bg-green-700">
                ✨ Evolve!
              </Button>
              {/* 2h - 💻 Add onClick={onClose} going back to the pattern, we want outside to control the visibility of the modal */}
              <Button className="bg-gray-600 hover:bg-gray-700">
                Cancel
              </Button>
            </div>
          </div>
          {/* 2i - 👨🏻💻♿️ Add id={`evolution_body_${id}`} - this creates the relationship between the content and modal */}
          <div className="mt-4 text-center text-sm text-gray-600">
            Your {pokemon.name} is ready to evolve into{' '}
            {evolution.name}!
          </div>
        </FocusLock>
      </div>
    </div>
  );
};

export const Exercise = () => {
  // 1a 💻 Create a state hook variable with isEvolutionVisible and setIsEvolutionVisible

  // 1b 💻 Create an onClose event that sets isEvolutionVisible to false

  // 1c 💻 Create an onConfirm event that handles evolution and closes modal

  // 1d 💻 Create an onCheckEvolution event that sets isEvolutionVisible to true

  const pokemon = {
    name: 'Charmander',
    level: 16,
    currentSprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  };

  // 💣 You can get rid of this eslint error comment when finished.
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const evolution = {
    name: 'Charmeleon',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    requirement: 'Level 16 reached!'
  };

  return (
    <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">
        🎮 Pokemon Evolution System
      </h2>

      <div className="text-center mb-6">
        <img
          src={pokemon.currentSprite}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto mb-4"
        />
        <h3 className="text-xl font-bold">{pokemon.name}</h3>
        <p className="text-gray-600">Level {pokemon.level}</p>
        <p className="text-green-600 font-semibold mt-2">
          Ready to evolve! 🌟
        </p>
      </div>

      {/* 1e 💻 Add the onClick={onCheckEvolution} event to the button
      ✍🏻 This is an example of a Controlled component but in a Pokemon context.
      As a developer, we are providing the button with those props for the button
      to behave how we want it to behave, otherwise, it does nothing. */}
      <div className="text-center">
        <Button className="bg-yellow-500 hover:bg-yellow-600">
          ⚡ Check Evolution
        </Button>
      </div>

      {/* 1f 💻 Check if isEvolutionVisible (💅 Conditional Render Pattern) to render the EvolutionModal */}
      {/* Map the isVisible, onClose, onConfirm props to the EvolutionModal. The other props can be whatever you want */}
    </div>
  );
};
