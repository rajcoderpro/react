import { useDispatch, useSelector } from "react-redux"
import {fetchGIFs , fetchVideos , fetchPhotos} from '../api/mediaApi'
import { useEffect } from "react"
import { setLoading , setError , setResults} from '../redux/features/searchSlice'
import ResultCard from "./ResultCard"
const ResultGrid = () => {
    const {query , activeTab ,loading , results , error} = useSelector((state) => state.search)
    const dispatch = useDispatch()
    useEffect(()=>{
        const  getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if(activeTab == 'photos'){
                    let response  = await fetchPhotos(query)
                    data = response.results.map((elem) => ({
                        id : elem.id ,
                        title: elem.alt_description,
                        src : elem.urls.full,
                        thumbnail :elem.urls.small ,
                        type  : 'photo',
                        hrefUrl :elem.links.download
                        
                    }))
                }
                if(activeTab == 'videos'){  
                    let response = await fetchVideos(query)
                    data = response.videos.map((elem ) => ({
                        id : elem.id ,
                        title: elem.user.name,
                        src : elem.video_files[0].link,
                        thumbnail :elem.image ,
                        type  : 'video',
                        hrefUrl :elem.url
                        
                    }))
                }
                if(activeTab == 'gif'){
                    let response = await fetchGIFs(query)
                    data = response.data.map((elem ) => ({
                        id : elem.id ,
                        title: elem.title,
                        src : elem.images.original.url,
                        thumbnail :elem.slug ,
                        type  : 'gif',
                        hrefUrl : elem.url

                        
                    }))
    
                }
                dispatch(setResults(data))
                
            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    } , [query , activeTab , dispatch])
    if(error) return <h1>{error}</h1>
    if(loading) return <h1 className="text-black text-center text-4xl font-semibold">loading</h1>
    return (
    <div className="px-18 flex flex-wrap gap-6  w-full h-full overflow-auto ">
        {results.map((elem) => {
            return <div key={elem.id} > 
             <ResultCard data = {elem} />
               
            </div>
        })}
    </div>
    )

}

export default ResultGrid