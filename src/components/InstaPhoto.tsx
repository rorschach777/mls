
import './InstaPhoto.css';
const baseUrl = "";

const dummyImageData = {

    imageRows: [
        {
            name: 'row1', 
            image1:  {
                meta: 'Image 1',
                url: `${baseUrl}/1.jpg`
            }, 
            image2:  {
                meta: 'Image 2',
                url: `${baseUrl}/2.jpg`
            }, 
            image3:  {
                meta: 'Image 3',
                url: `${baseUrl}/3.jpg`
            }, 
            image4:  {
                meta: 'Image 4',
                url: `${baseUrl}/4.jpg`
            }, 
        },
        {
            name: 'row2', 
            image1:  {
                meta: 'Image 1',
                url: `${baseUrl}/5.jpg`
            }, 
            image2:  {
                meta: 'Image 2',
                url: `${baseUrl}/6.jpg`
            }, 
            image3:  {
                meta: 'Image 3',
                url: `${baseUrl}/7.jpg`
            }, 
            image4:  {
                meta: 'Image 4',
                url: `${baseUrl}/8.jpg`
            }, 
        },
        {
            name: 'row2', 
            image1:  {
                meta: 'Image 1',
                url: `${baseUrl}/9.jpg`
            }, 
            image2:  {
                meta: 'Image 2',
                url: `${baseUrl}/10.jpg`
            }, 
            image3:  {
                meta: 'Image 3',
                url: `${baseUrl}/11.jpg`
            }, 
            image4:  {
                meta: 'Image 4',
                url: `${baseUrl}/12.jpg`
            }, 
        }
    ]
}
interface ImageObj  {
    meta: String,
    url: String
}
interface ImageRow {
    name: string,
    image1 : ImageObj,
    image2: ImageObj
    image3: ImageObj,
    image4: ImageObj
}
interface ImageRows {
    imageRows : Array<ImageRow>
}

const generateInstaRow = () => {
    let data : ImageRows= dummyImageData ;
    
    return data.imageRows.map((c : ImageRow ,i : number)=>{
        return (
            <div className="insta-grid-row">
            <div className="insta-grid-column" style={{backgroundImage:`url(${c.image1.url})`}}></div>
            <div className="insta-grid-column">
                <div className="insta-grid-mosaic">
                    <div className="insta-grid-mosaic-container">
                        <div className="insta-grid-mosaic-item" style={{backgroundImage:`url(${c.image2.url})`}}>
                        </div>
                        <div className="insta-grid-mosaic-item" style={{backgroundImage:`url(${c.image3.url})`}}>
                        </div>
                    </div>
                    <div className='insta-grid-mosaic-container'>
                        <div className="insta-grid-mosaic-item" style={{backgroundImage:`url(${c.image4.url})`}}></div>
                    </div>
                </div>
            </div>
        </div>
        );
    })

}


export default function InstaPhoto(){
    return (
        <div className="insta-grid">
            {generateInstaRow()}
  
            
        </div>
    );
    
}


