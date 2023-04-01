import { Grid } from '@mui/material'
import ProductsListItem from 'components/ProductsList/ProductsListItem'
import React, { useState } from 'react'

import ReactPaginate from 'react-paginate'
import productsArray from 'utils/productsArray'
import './Pagination.scss'

function PaginatedItems() {
    const [items] = useState(productsArray.slice(0, 10))
    const itemsPerPage = 4
    const [itemOffset, setItemOffset] = useState(0)

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
