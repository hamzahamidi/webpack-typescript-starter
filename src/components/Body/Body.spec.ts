import Body from './Body';

describe('Body Description', () => {
    it('should render', () => {
        expect(Body()).toMatchSnapshot();
    });
});
