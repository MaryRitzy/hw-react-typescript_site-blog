import { Typography } from '@mui/material'
import { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
} from '@mui/material'

type Props = {}
type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Христина',
            text: 'Покупкою задоволена на всі 100!!!! Гарний дизайн, приємний колір, легкий, зручно поміщається в жіночій руці. Як на мене слабкувата камера - у самсунга буде яскравіша. Але яблучна продукція, як завжди, відповідає своєму високому рівню!',
        },
        {
            name: 'Ольга',
            text: 'Брав на заміну старому XS, дуже задоволений! Був приємно вражений що на коробці з заводу є qr коди які ведуть на apple.com на посібник користувача і гарантію, а раніше такого не було, давали просто гарантії',
        },
        {
            name: 'Iнна',
            text: 'Покупкою задоволена на всі 100!!!! Гарний дизайн, приємний колір, легкий, зручно поміщається в жіночій руці. Як на мене слабкувата камера - у самсунга буде яскравіша. Але яблучна продукція, як завжди, відповідає своєму високому рівню!',
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
            <Typography variant="h4" component="h2" sx={{ margin: '60px 0' }}>
                Reviews
            </Typography>
            <div>
                {reviews.map((item, i) => (
                    <Card variant="outlined" sx={{ margin: '20px 0' }} key={i}>
                        <CardContent>
                            <div>Name:{item.name}</div> {/*можна, без Name*/}
                            <p>{item.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Please leave a reviews</h3>
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
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
                {/*можна variant="contained" тоді кнопка в кольорі*/}
            </form>
        </>
    )
}

export default Reviews
