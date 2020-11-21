import { createGlobalStyle } from "styled-components";

export const GlobalResetStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

// export const Row = styled.div`
//   &::after {
//     content: "";
//     clear: both;
//     display: table;
//   }
// `;

// function getWidthString(span) {
//   if (!span) return;

//   let width = (span / 12) * 100;
//   return `width: ${width}%`;
// }

// export const Column = styled.div`
//   float: left;
//   ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")}

//   @media only screen and (min-width: 768px) {
//     ${({ sm }) => sm && getWidthString(sm)}
//   }

//   @media only screen and (min-width: 992px) {
//     ${({ md }) => md && getWidthString(md)}
//   }

//   @media only screen and (min-width: 1200px) {
//     ${({ lg }) => lg && getWidthString(lg)}
//   }
// `;
