import {
	TimelineStyled,
	OutlineStyled,
	TableStyled,
} from './styles/Timeline.styled';
import { outlineArray, timelineArray, theadArray } from './data/timeline.data';

const Timeline = () => {
	return (
		<TimelineStyled>
			<OutlineStyled>
				{outlineArray.map(section => (
					<section>
						<h4>{section.title}</h4>
						{section.tr &&
							section.tr.map(item => (
								<dl>
									<dt>{item.key}</dt>
									<dd>{item.val}</dd>
								</dl>
							))}
						{section.list &&
							section.list.map(item => (
								<dl className='list'>
									<dt>{item.key}</dt>

									{item.val.map(el => (
										<dd>{el}</dd>
									))}
								</dl>
							))}
					</section>
				))}
			</OutlineStyled>

			<TableStyled>
				<thead>
					{theadArray.map(thead => (
						<td className={thead.className}>{thead.title}</td>
					))}
				</thead>
				<tbody>
					{timelineArray.map(row => (
						<tr className={row.className && row.className}>
							<td className='date-occurred'>
								<date>{row.dateOccurred}</date>
								<div>{row.eventType}</div>
								<div>{row.message}</div>
							</td>
							<td className='event-type'>
								<table>
									{row.tr.map(item => (
										<tr>
											<td className='inner-table-key'>{item.key}</td>
											<td className='inner-table-value'>{item.val}</td>
										</tr>
									))}
								</table>
							</td>
							<td className='source'>
								<a href='#'>{row.source}</a>
							</td>
							<td className='date-abstracted'>
								<div>{row.dateAbstracted.date}</div>
								<div>{row.dateAbstracted.note}</div>
							</td>
						</tr>
					))}
				</tbody>
			</TableStyled>
		</TimelineStyled>
	);
};

export default Timeline;
