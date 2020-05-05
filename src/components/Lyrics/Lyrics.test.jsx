import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics.jsx';

describe('Lyrics', () => {
  it('displays song and its lyrics', () => {
    const wrapper = shallow(<Lyrics match={{ params: { artistId: 'singer', songTitle: 'my cool song, ' } }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
