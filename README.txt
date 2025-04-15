# Link to website

aditya-s-2k24.github.io


# Assumptions

## Q2

- Since the questions says "page views" I have taken it to mean that we need to log the "view" event only for the entire page and not individual elements.
- As the questions says the event object should be something like "drop-down, image, text, etc." i have not directly console.log'ed the object, but rather printed out what type of element has been clicked as text.
- To make the output more readable I have used a pipe symbol (|) instead of a comma.
- "page views" only apply to pages, so a console.log is only generated when a user loads index.html or q3.html NOT when they click on an email, telephone or CV link.

## Q3

- Numbers are not "special characters" or letters.
- Since all analysis on tokens must be performed on dictionary words, the tokenization code handles punctuation but NOT numbers.
- If a number is part of a sequence of alphabets, that sequence is NOT a word.
- A sequence of numbers in not a word.
- The textarea field can scroll to accomodate 10000+ words.
- Given the wording of the question "Using JavaScript, read the text input using a Text box with more than 10000 words." I have assumed that the specification of "more than 10000 words" here is simply there to help us in choosing appropriate UI sizes, and that we are NOT expected to enforce a minimum word count of 10000.
