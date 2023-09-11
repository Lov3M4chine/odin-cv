const ResumeHeader: React.FC = () => {
  return (
    <>
      <div className="bg-blue-500 p-6">
        <div className="flex justify-center text-3xl">John Smith</div>
        <div className="flex justify-center gap-3">
          <div>Email</div>
          <div>Phone</div>
          <div>Address</div>
        </div>
      </div>
      <div className=" m-6 flex justify-center bg-slate-300 text-xl ">
        Education
      </div>
      <div className="m-6 flex gap-6">
        <div className="w-[250px]">
          <div>10/2022 - 10/2023</div>
          <div className=" flex flex-wrap ">Phoenix, AZ</div>
        </div>
        <div className=" w-full">
          <div className=" font-bold ">Name</div>
          <div>Title</div>
        </div>
      </div>
      <div className=" m-6 flex justify-center bg-slate-300 text-xl ">
        Experience
      </div>
      <div className="m-6 flex gap-6">
        <div className="w-[250px]">
          <div>10/2022 - 10/2023</div>
          <div className=" flex flex-wrap ">Phoenix, AZ</div>
        </div>
        <div className=" w-full">
          <div className=" font-bold ">Name</div>
          <div>Title</div>
          <div>
            Description Description Description Description Description
            Description Description Description Description
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeHeader
