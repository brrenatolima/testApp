import {render, screen, fireEvent} from '@testing-library/react-native'
import Button from './index'
const Btn = Button;

test("quero testar se o handleclick está funcionando corretamente", () => {
    render(<Button content="botao" handleClick={() => {}}/>);
    const button = screen.getByTestId('button-test');
    expect(button.nodes[0]).toBe(true);
});