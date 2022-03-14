import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'

export interface ListingVideoProps {
    header: string
    noborder?: boolean
    data: ListProps[]
}

export interface ListProps {
    src: string
    title: string
    image?: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}


const ListingVideo: React.FC<ListingVideoProps> = ({
    header,
    noborder,
    data,
}): JSX.Element => {
    return (
            <Ublock>
                <header>
                    <Heading header={header} noborder={noborder} />
                </header>
                <div className="b-listing b-listing--video">
                    <ul itemScope itemType="http://schema.org/ItemList">
                        {data.map((list, index) => (
                            <li itemProp="item" key={index}>
                                <a href={list.src} itemProp="url">
                                    {list.image && (
                                        <figure>
                                            <img src={list.image.src} alt={list.image.alt} itemProp="image" />
                                            <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 12c0-3.205 1.248-6.219 3.515-8.485A11.921 11.921 0 0 1 12 0c3.205 0 6.219 1.248 8.485 3.515A11.92 11.92 0 0 1 24 12a11.92 11.92 0 0 1-3.515 8.485A11.92 11.92 0 0 1 12 24a11.92 11.92 0 0 1-8.485-3.515A11.921 11.921 0 0 1 0 12zM12 1.1C5.99 1.1 1.1 5.99 1.1 12c0 6.01 4.89 10.9 10.9 10.9 6.01 0 10.9-4.89 10.9-10.9 0-6.01-4.89-10.9-10.9-10.9zm-1.98 15.919h.001c-.524.333-1.161.036-1.161-.619v-.53h.006V8.907H8.86V7.61c0-.654.637-.963 1.161-.63l6.653 4.366c.525.333.513.874-.005 1.201l-6.648 4.473z" /></svg>
                                        </figure>
                                    )}
                                    <div>
                                        <h3 itemProp="headline" dangerouslySetInnerHTML={{ __html: list.title }} />
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
        </Ublock>
    )
}

export default ListingVideo