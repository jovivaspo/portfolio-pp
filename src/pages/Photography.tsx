import { Header } from '../components/Header'
import { GalleryPhotography } from '../components/GalleryPhotography'



export const Photography = () => {
  return (
     <>
       <Header
        text="Photography"
        image="https://images.unsplash.com/photo-1679348958612-e0afa1591f29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80"
      />
   <GalleryPhotography/>
     </>
   
  )
}
