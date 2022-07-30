
import { cleanup, fireEvent, render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import Shop from './Shop'
import { ArrayProvider,arrayContext } from "../../arrayContext"; 

afterEach(cleanup)

test('shop should be rendred',()=>{
    render(
        <ArrayProvider>
            <Shop/>
        </ArrayProvider>
    )
    const shop = screen.getByTestId('shop')
    expect(shop).toBeVisible()
})

test('shop product card should be rendred',()=>{
    render(
        <ArrayProvider>
            <Shop/>
        </ArrayProvider>
    )
    const product = screen.getAllByTestId("product")
    expect(product.length).toBe(4)

})


test('shop 4 buttons should be rendred',()=>{
    render(
        <ArrayProvider>
            <Shop/>
        </ArrayProvider>
    )
    const val = screen.getAllByRole("button")
    expect(val.length).toBe(4)

})


test('test button to add to cartArr',()=>{
    render(
        <ArrayProvider>
            <Shop/>
            <arrayContext.Consumer>
                {
                    value=> <span data-testid='val'>{value.cartArr.length}</span>
                }
            </arrayContext.Consumer>
        </ArrayProvider>
    )
    const btn = screen.getAllByRole("button")
    fireEvent.click(btn[0])
    const val = screen.getByTestId('val')
    expect(val).toHaveTextContent(1)

})