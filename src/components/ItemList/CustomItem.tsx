interface ICustomItem {
    item: {
        id: string
        title: string
        author: string
        bookCover?: string
        publicationDate?: number
        annotation?: string
    }
}

const CustomItem = ({ item }: ICustomItem) => {
    const { id, title, author, publicationDate } = item
    return (
        <li key={id}>
            <span>Title: {title}</span>
            <span>Author: {author}</span>
            <span>Publication date: {publicationDate}</span>
        </li>
    )
}

export default CustomItem
