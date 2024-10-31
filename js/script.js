'use strict';

const initApp = () => {
  const quotes = [
    {
      quote:
        'The person who says it cannot be done should not interrupt the person who is doing it',
      source: 'Chinese Proverb',
    },
    {
      quote:
        'The only thing necessary for the triumph of evil is for good men to do nothing',
      source: 'Edmund Burke',
      year: 1770,
    },
    {
      quote:
        'When bad men combine, the good must associate; else they will fall one by one, an unpitied sacrifice in a contemptible struggle',
      source: 'Edmund Burke',
    },
    {
      quote:
        'Moral courage is the most valuable and usually the most absent characteristic in men',
      source: 'General George S. Patton',
    },
    {
      quote:
        "Don't be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better",
      source: 'Ralph Waldo Emerson',
      tags: 'Inspirational',
    },
    {
      quote:
        "I am thankful for all of those who said, 'NO' to me. It's because of them I'm doing it myself",
      source: 'Albert Einstein',
      tags: 'Motivational',
    },
    {
      quote: 'Lead me, follow me, or get out of my way',
      source: 'General George S. Patton',
    },
    {
      quote:
        'He who fights with monsters might take care lest he thereby become a monster. And if you gaze for long into an abyss, the abyss gazes also into you',
      source: 'Friedrich Nietzsche',
      citation: 'Beyond Good and Evil',
    },
    {
      quote: 'To see what is right and not do it is a lack of courage',
      source: 'Confucius',
    },
    {
      quote: 'You are never too old to set another goal or dream a new dream',
      source: 'C.S. Lewis',
      tags: 'Motivational',
    },
  ];

  // Utility Functions
  const getRandomValue = (num) => Math.floor(Math.random() * num);
  const getRandomRGB = () =>
    `rgb(${getRandomValue(256)}, ${getRandomValue(256)}, ${getRandomValue(
      256,
    )})`;

  // Get a random quote ensuring it's not the same as the last one
  const getRandomQuote = (lastQuote) => {
    let newQuote;

    do {
      newQuote = quotes[getRandomValue(quotes.length)];
    } while (newQuote === lastQuote);

    return newQuote;
  };

  // Generate HTML for the quote
  const generateQuoteHTML = ({ quote, source, citation, year, tags }) => {
    return `
    <p class="quote">${quote}</p>
     <footer class="source">
      <p>
        ${source} ${citation ? `<span class="citation">${citation}</span>` : ''}
        ${year ? `<span class="year">${year}</span>` : ''} ${
      tags
        ? `<span
          ><em>#${tags}</em></span
        >`
        : ''
    }
      </p>
    </footer>
    `;
  };

  // Main function to display the quote
  const displayQuote = () => {
    clearInterval(autoQuotes);
    autoQuotes = setInterval(displayQuote, 5000);

    const randomQuote = getRandomQuote(lastQuote);
    lastQuote = randomQuote;

    const quoteHTML = generateQuoteHTML(randomQuote);
    document.getElementById('quote-box').innerHTML = quoteHTML;
    document.body.style.backgroundColor = getRandomRGB();
  };

  // Initialize the quote display
  let lastQuote = null;
  let autoQuotes = setInterval(displayQuote, 5000);
  document.getElementById('load-quote').addEventListener('click', displayQuote);
};

document.addEventListener('DOMContentLoaded', initApp);
