import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Card from '../Card';

test('Renders a card sucessfully', () => {
    const input = {
        show: {
            image: 'https://static.tvmaze.com/uploads/images/original_untouched/145/364581.jpg',
            name: 'test_name',
            summary: 'test_summary'
        }
    };

    const { container } = render(<Card item={input} onClick={() => {}}/>);

    const mainNode = container.getElementsByClassName('tv-show-catalog__item');

    expect(mainNode).toHaveLength(1);
})