import Element from "./Element"

export default function ElementSeparator() {
  return (
    <>
      <main className="w-screen h-12 px-[10vw] flex items-center space-x-[40px] justify-center py-[100px]">
        <Element name="mainArrowSide" className="w-[100px]"/>
        <Element name="mainArrowCenter" className="w-[70px] h-[30px]"/>
        <Element name="mainArrowSide" className="w-[100px] rotate-180"/>
      </main>
    </>
  )
}