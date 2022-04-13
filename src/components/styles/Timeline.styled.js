import styled from 'styled-components';

export const TimelineStyled = styled.div`
	grid-area: timeline;
	padding-top: 6rem;
	background-color: var(--gray0);
`;

export const OutlineStyled = styled.div`
	background-color: var(--gray80);
	color: var(--text-light);
	display: grid;
	font-size: var(--font-size-sm);
	grid-template-columns: repeat(3, 1fr);
	padding-block: var(--space1);
	h4 {
		border-bottom: 3px solid var(--accent-warning100);
		margin: 0 0 1em 0;
		padding-bottom: 0.3em;
		text-transform: uppercase;
	}
	dl {
		border-bottom: 1px solid var(--gray60);
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
	border-collapse: collapse;
	font-size: var(--font-size-sm);
	width: 100%;

	thead {
		color: var(--gray80);
		text-transform: uppercase;
		td {
			border: 1px solid var(--gray60);
			border-bottom-width: 0;
			font-size: var(--font-size-xs);
			font-weight: bold;
			padding: 0.5em;
			vertical-align: middle;
		}
	}
	tbody {
		td {
			border: 1px solid var(--gray60);
			padding: 0.5rem;
			vertical-align: top;
			&.event-type {
				border: 0;
				padding: 0;
			}
			&.source {
				border-left: 0;
			}
			&.date-occurred {
				border-right: 0;
				text-align: right;
				date {
					font-weight: bold;
				}
				div {
					font-style: italic;
					font-size: var(--font-size-xs);
					margin-block: 0.5em;
					text-transform: capitalize;
				}
			}

			table {
				border-collapse: collapse;
				width: 100%;
				tr:last-of-type {
					td {
						border-bottom: 0;
					}
				}
				td {
					border: 1px solid var(--gray60);
					vertical-align: top;
					&.inner-table-key {
						color: var(--gray80);
						text-transform: capitalize;
						width: 30%;
					}
					&.inner-table-value {
						font-family: var(--font-family-ubuntu-mono);
						width: 70%;
					}
				}
			}
		}
	}
`;
