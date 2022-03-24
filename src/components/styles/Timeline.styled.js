import styled from 'styled-components';

export const TimelineStyled = styled.div`
	grid-area: timeline;
`;

export const OutlineStyled = styled.div`
	background-color: var(--gray80);
	color: var(--text-light);
	display: grid;
	font-size: var(--font-size-sm);
	grid-template-columns: repeat(3, 1fr);
	padding-block: var(--space1);
	h4 {
		margin: 0 0 0.5em 0;
		text-transform: uppercase;
	}
	dl {
		display: flex;
		justify-content: space-between;
		margin: 0 0 1em 0;
		padding: 0;

		&.list {
			display: block;
			dd {
				padding-block: 0.5em;
				position: relative;
				&:before {
					border-left: 1px solid var(--gray0);
					border-bottom: 1px solid var(--gray0);
					content: '';
					display: block;
					position: absolute;
					height: 30%;
					width: 10px;
					left: -14px;
				}
			}
		}
	}
	section {
		border-right: 1px solid var(--gray0);
		padding-inline: var(--space1);
		&:last-of-type {
			border-right: 0;
		}
	}
`;

export const TableStyled = styled.table`
	font-size: var(--font-size-sm);
	width: 100%;
	thead {
		color: var(--gray80);
		text-transform: uppercase;
	}
	td {
		/* border: 1px solid blue; */
		padding: 0.5rem;
		table {
			width: 100%;
		}
	}
	.date-occurred {
		text-align: right;
		date {
			font-weight: bold;
		}
		div {
			font-style: italic;
		}
	}
`;
