import { Gallery, ItemGallery } from "../components/Gallery"
import { Header } from "../components/Header"
import { Slide } from "../components/Slide"

const Items: ItemGallery[] = [
    {   id:1,
        type: "video",
        src:  "https://youtu.be/oplHX4cBgE8",
        text: "Videography",
        path: "videography"
    },
     {  
        id:2,
        type: "image",
        src:     "https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        text: "Photos",
        path: "photos"
    },
     {
        id:3,
        type: "image",
        src:     "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        text: "Features/Colab",
        path: "colab"
    },
]

export const Home = () => {
  return (
    <>
    <Header text="Foto Here" image="https://images.unsplash.com/photo-1679348958612-e0afa1591f29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80"/>
    <Slide/>
    <Gallery items={Items}/>
    </>
  )
}
