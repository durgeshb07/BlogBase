
const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:px-[230px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start  justify-between text-sm md:text-md py-8">
      <div className="flex flex-col text-white">
        <p>Featured Blogs</p>
        <p>Most viewed</p>
        <p>Readers Choice</p>
      </div>

      <div className="flex flex-col text-white">
        <p>Forum </p>
        <p>Support viewed</p>
        <p>Recent Posts</p>
      </div>

      <div className="flex flex-col text-white">
        <p>Privacy policy </p>
        <p>About Us</p>
        <p> Terms & Conditions</p>
        <p> Terms of Service</p>
      </div>
    </div>
    <p className="py-2 pb-6 text-center text-white bg-black">All rights reserved @BlogBase 2024</p>
    </>
  )
}

export default Footer
