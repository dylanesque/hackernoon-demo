# Notes

- I'm not concerned about it for a quick and dirty demo like this one, but I would avoid using `dangerouslySetInnerHTML` in production code. If time allows, I'll research and make an adjustment that protects against XSS attacks for this code.

- There may be questions about why I'm using class-based styling or standard React inline-styling  in combination with the Emotion library: I found out the hard way while working on this demo that there are current issues with the CSS prop in Emotion in React 17 (https://github.com/emotion-js/emotion/issues/2041), so I decided that this was the fastest approach to deal with styling in cases where I would do so using the css prop vs styled components.





