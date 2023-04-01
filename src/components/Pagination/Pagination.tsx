import { Grid } from '@mui/material'
import ProductsListItem from 'components/ProductsList/ProductsListItem'
import React, { useState } from 'react'

import ReactPaginate from 'react-paginate'
import productsArray from 'utils/productsArray'
import './Pagination.scss'

// Example items, to simulate fetching from another resources.
/*const items = [productsArray]

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map(
                    (
                        item:
                            | string
                            | number
                            | boolean
                            | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                              >
                            | React.ReactFragment
                            | React.ReactPortal
                            | null
                            | undefined
                    ) => (
                        <div>
                            <h3>Item #{item}</h3>
                        </div>
                    )
                )}
        </>
    )
}*/

function PaginatedItems() {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [items] = useState(productsArray.slice(0, 10))
    const itemsPerPage = 4
    const [itemOffset, setItemOffset] = useState(0)

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    const currentItems = items.slice(itemOffset, endOffset).map((items) => {
        return (
            <ProductsListItem
                id={items.id}
                image={items.image}
                title={items.title}
                description={items.description}
                сategory={items.сategory}
                capacity={items.capacity}
                price={items.price}
            />
        )
    })
    const pageCount = Math.ceil(items.length / itemsPerPage)

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        )
        setItemOffset(newOffset)
    }

    return (
        <>
            <div className="bg1">
                <div className="title-pagination">WHAT’S CRACKIN’</div>
                <Grid item xs={12} sm={6} md={6} className="pagination-grid">
                    {currentItems}
                </Grid>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    className="parination-bttns"
                />
            </div>
        </>
    )
}

export default PaginatedItems
// Add a <div id="container"> to your HTML to see the component rendered.
/*ReactDOM.render(
    <PaginatedItems itemsPerPage={4} />,
    document.getElementById('container')
)*/
