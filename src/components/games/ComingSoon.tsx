import Pepe from "../Pepe";

export default function ComingSoon() {
  return (
    <main className="flex flex-col w-full h-full justify-center items-center">
      <div className=" w-[400px] h-[400px] flex flex-col justify-center items-center">
        {/* <p className="font-main text-[60px] mt-[-20px]">Work in progress!</p> */}
        <Pepe type="Caphead" size={300}/>
      </div>
      <div>
        <h1 className="text-[60px] font-main text-center">Coming Soon</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          aut necessitatibus! Numquam itaque expedita tempora suscipit aliquid
          sunt necessitatibus perferendis.
        </p>
      </div>
    </main>
  )
}