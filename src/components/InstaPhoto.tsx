
import './InstaPhoto.css';
const baseUrl = "https://i.imgur.com/";
import { Image } from 'antd';

const dummyImageData = {

    imageRows: [
        {
            name: 'row1',
            image1: {
                meta: 'Image 1',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
            image2: {
                meta: 'Image 2',
                url: `${baseUrl}/6DBGPk5.jpeg`
            },
            image3: {
                meta: 'Image 3',
                url: `${baseUrl}/DA00KOH.jpeg`
            },
            image4: {
                meta: 'Image 4',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
        },
        {
            name: 'row2',
            image1: {
                meta: 'Image 1',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
            image2: {
                meta: 'Image 2',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
            image3: {
                meta: 'Image 3',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
            image4: {
                meta: 'Image 4',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
        },
        {
            name: 'row2',
            image1: {
                meta: 'Image 1',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
            image2: {
                meta: 'Image 2',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
            image3: {
                meta: 'Image 3',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
            image4: {
                meta: 'Image 4',
                url: `${baseUrl}/FOXwyne.jpeg`
            },
        }
    ]
}
interface ImageObj {
    meta: String,
    url: String
}
interface ImageRow {
    name: string,
    image1: ImageObj,
    image2: ImageObj
    image3: ImageObj,
    image4: ImageObj
}
interface ImageRows {
    imageRows: Array<ImageRow>
}

const generateInstaRow = () => {
    let data: ImageRows = dummyImageData;

    return data.imageRows.map((c: ImageRow, i: number) => {
        return (
            <div className="insta-grid-row" key={`insta-grid-row-${i}`}>
                <div className="insta-grid-column">
                    <Image
                        src={`${c.image1.url}`}
                    />
                </div>
                <div className="insta-grid-column">
                    <div className="insta-grid-mosaic">
                        <div className="insta-grid-mosaic-container">

                            <div className="insta-grid-mosaic-item">
                            <Image
                                src={`${c.image2.url}`}
                            />
                            </div>
                            <div className="insta-grid-mosaic-item" >
                            <Image
                                src={`${c.image3.url}`}
                            />
                            </div>
                        </div>
                        <div className='insta-grid-mosaic-container'>
                            <div className="insta-grid-mosaic-item">
                                <Image
                                    src={`${c.image2.url}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

}


const InstaPhoto = () => {
    return (
        <section className="dark-bg">
            <div className="insta-grid">
                {generateInstaRow()}
            </div>
        </section>
    );

}

export default InstaPhoto;

