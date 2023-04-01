import { Typography } from '@mui/material'
import { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
} from '@mui/material'
import './Reviews.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

type Props = {}
type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Христина',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta, accusamus illum, labore natus recusandae dolores dolorum esse nam pariatur nemo possimus nesciunt quia vel neque optio sunt provident sint.',
        },
        {
            name: 'Ольга',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta, accusamus illum, labore natus recusandae dolores dolorum esse nam pariatur nemo possimus nesciunt quia vel neque optio sunt provident sint.',
        },
        {
            name: 'Iнна',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta, accusamus illum, labore natus recusandae dolores dolorum esse nam pariatur nemo possimus nesciunt quia vel neque optio sunt provident sint.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setNewReview({
                name: '',
                text: '',
            })
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    return (
        <>
            <div className="bg-reviews">
                <div className="reviews-pulpage">
                    <Typography className="title-revies">Reviews:</Typography>
                    <div>
                        {reviews.map((item, i) => (
                            <Card
                                variant="outlined"
                                sx={{ margin: '20px 0' }}
                                key={i}
                            >
                                <CardContent>
                                    <div className="review-icon">
                                        <AccountCircleIcon />
                                        <div className="name-style">
                                            {item.name}
                                        </div>{' '}
                                    </div>
                                    <p>{item.text}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <form onSubmit={onSend} className="reviews-form">
                        <div className="title-form-reviews">
                            Please leave a reviews
                        </div>
                        <div>
                            <TextField
                                label="Name"
                                value={newReview.name}
                                onChange={handleName}
                            />
                        </div>
                        <br />
                        <div>
                            <TextareaAutosize
                                minRows={5}
                                placeholder="Text"
                                value={newReview.text}
                                onChange={handleText}
                                style={{
                                    height: 42,
                                    width: 210,
                                    borderColor: 'rgba(255, 255, 0, 0.444)',
                                    borderRadius: 3,
                                }}
                            />
                        </div>
                        <Button
                            variant="outlined"
                            type="submit"
                            className="form-reviewsBtn"
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reviews
