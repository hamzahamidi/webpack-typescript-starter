import Title from './Title';

describe('Body Description', () => {
    it('should render', () => {
        expect(Title()).toMatchSnapshot();
    });
});
