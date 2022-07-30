import { cleanup, fireEvent, getByAltText, render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'
import { ArrayProvider,arrayContext,visibleContext,useArrayContext } from "../../arrayContext"; 



describe('.header',()=>{
    test('if header is rendred',()=>{
        render(
            <MemoryRouter>
                <ArrayProvider>
                    <Header/>
                </ArrayProvider>
            </MemoryRouter>
        )
        const nav = screen.getAllByTestId('nav')
        expect(nav.length).toBe(3)
        
    })
    test('test if buttons are rendred',()=>{
        render(
            <MemoryRouter>
                <ArrayProvider>
                    <Header/>
                </ArrayProvider>
            </MemoryRouter>
        )
        const logo = screen.getByText(/SHOPYSHOP/i)
        expect(logo).toBeVisible()
    })

    test('if cart is empty',() =>{
        render(
            <MemoryRouter>
                <ArrayProvider>
                    <Header/>
                </ArrayProvider>
            </MemoryRouter>)
        const cart = screen.getByText(/cart /i)
        expect(cart).toHaveTextContent('Cart 0')


    })
    test('if cart is updating with righ number',()=>{
        const cartArr =[{
            name:'item1',
            price:'101$',
            quantity:1
            },
            {
            name:'item2',
            price:'102$',
            quantity:1
            },]
        const varr = false
        render(
            <MemoryRouter>
                <arrayContext.Provider value={{cartArr}} >
                    <visibleContext.Provider value={{varr}}>
                        <Header/>
                    </visibleContext.Provider>  
                </arrayContext.Provider>
            </MemoryRouter>)

            const cart = screen.getByText(/cart /i)
            expect(cart).toHaveTextContent('Cart 2')
    })
    test('test when cart button is clicked cart is visible',()=>{

        render(
            <MemoryRouter>
                <ArrayProvider>
                    <Header/>
                </ArrayProvider>
            </MemoryRouter>)

        const cartButton = screen.getByText(/cart /i)
        fireEvent.click(cartButton)
        expect(screen.getByTestId('cart')).toBeVisible()

    })
    test('if cart button is clicked cart is not visible',()=>{

        render(
            <MemoryRouter>
                <ArrayProvider>
                    <Header/>
                </ArrayProvider>
            </MemoryRouter>)

        const cartButton = screen.getByText(/cart /i)
        fireEvent.click(cartButton)
        fireEvent.click(cartButton)
        expect(screen.getByTestId('cart')).not.toBeVisible()

    })
    test('if cart items are rendred',()=>{
        const cartArr =[{
            name:'item1',
            price:'101$',
            quantity:1
            },
            {
            name:'item2',
            price:'102$',
            quantity:1
            },]
            const visibleUp = jest.fn();
            render(
            <MemoryRouter>
                <arrayContext.Provider value={{cartArr}} >
                    <visibleContext.Provider value={{visibleUp}}>
                        <Header/>
                    </visibleContext.Provider>  
                </arrayContext.Provider>
            </MemoryRouter>)

        const cartButton = screen.getByText(/cart /i)
        fireEvent.click(cartButton)
        const btns = screen.getAllByTestId('deleteItem')
        expect(btns.length).toBe(2)
    })


    test('deleting butoon is called',()=>{
         const cartArr =[{
            name:'item1',
            price:'101$',
            quantity:1
            },
            {
            name:'item2',
            price:'102$',
            quantity:1
            },]
            const visibleUp = jest.fn();
            const cartArrUp = jest.fn();
            render(
            <MemoryRouter>
                <arrayContext.Provider value={{cartArr,cartArrUp}} >
                    <visibleContext.Provider value={{visibleUp}}>
                        <Header/>
                    </visibleContext.Provider>  
                </arrayContext.Provider>
            </MemoryRouter>)

        const cartButton = screen.getByText(/cart /i)
        fireEvent.click(cartButton)
        const btns = screen.getAllByTestId('deleteItem')
        fireEvent.click(btns[0])
        expect(cartArrUp).toHaveBeenCalled()
    })
    test('deleting items',()=>{
         const cartArr =[{
            name:'item1',
            price:'101$',
            quantity:1
            },
            {
            name:'item2',
            price:'102$',
            quantity:1
            },]
            const visibleUp = jest.fn();
            const cartArrUp = jest.fn(0)
            render(
            <MemoryRouter>
                <arrayContext.Provider value={{cartArr,cartArrUp}} >
                    <visibleContext.Provider value={{visibleUp}}>
                        <Header/>
                    </visibleContext.Provider>  
                </arrayContext.Provider>
            </MemoryRouter>)

        const cartButton = screen.getByText(/cart /i)
        fireEvent.click(cartButton)
        const btns = screen.getAllByTestId('deleteItem')
        fireEvent.click(btns[0])
        expect(cartArr.length).toBe(1)
    })

    test('if  items quantity is corecct',()=>{
        const cartArr =[{
            name:'item1',
            price:'101$',
            quantity:5
            }]
            const visibleArr = true
            const visibleUp = jest.fn();
            render(
            <MemoryRouter>
                <arrayContext.Provider value={{cartArr}} >
                    <visibleContext.Provider value={{visibleArr,visibleUp}}>
                        <Header/>
                    </visibleContext.Provider>  
                </arrayContext.Provider>
            </MemoryRouter>)

        const quantity = screen.getByDisplayValue('5')
        expect(quantity).toBeVisible()
    })

})
