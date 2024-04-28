import { Button } from "@material-tailwind/react"
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { BiSupport } from "react-icons/bi";
import { AiFillLike } from 'react-icons/ai';
import { useTypewriter } from 'react-simple-typewriter';
function SupportService() {

    const [text] = useTypewriter({
    words: ['P', 'Pr', 'Pri', 'Pric' ,'Prici','Pricin' ,'Pricing'],
    loop: 0
  })
    const [text2] = useTypewriter({
    words: ['Q', 'Qu', 'Qua', 'Qual' ,'Quali','Qualit' ,'Quality'],
    loop: 0
  })
    const [text3] = useTypewriter({
    words: ['S', 'Su', 'Sup', 'Supp' ,'Suppo','Suppor' ,'Support'],
    loop: 0
  })
  return (
    <div className="mt-8 md:mt-12 lg:mt-16 font-fontPrimary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-center">
        Support & Service
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-4 md:mt-6">
        <div className="border p-4 md:p-5 rounded-md  space-y-2">
          <div className="text-center">
            <div className="inline-block p-4 rounded-lg bg-[#4C4452]">
              <FaHandHoldingDollar className="text-white text-3xl" />
            </div>
          </div>
          <h2 className="text-lg lg:text-2xl font-bold text-center">
            Affordable <span>{text}</span>
          </h2>
          <p className="text-center">
            Affordable pricing levels the playing field, empowering all to
            access quality without financial barriers.
          </p>
          <div className="text-center">
            <Button className="bg-[#4C4452] hover:scale-105 mt-2">
              Learn More
            </Button>
          </div>
        </div>
        <div className="border p-4 md:p-5 rounded-md  space-y-2">
          <div className="text-center">
            <div className="inline-block p-4 rounded-lg bg-[#4C4452]">
              <AiFillLike className="text-white text-3xl" />
            </div>
          </div>
          <h2 className="text-lg lg:text-2xl font-bold text-center">
            Top <span>{text2}</span>
          </h2>
          <p className="text-center">
            Top quality sets the standard, delivering excellence that exceeds
            expectations and stands the test of time.
          </p>
          <div className="text-center">
            <Button className="bg-[#4C4452] hover:scale-105 mt-2">
              Learn More
            </Button>
          </div>
        </div>
        <div className="border p-4 md:p-5 rounded-md  space-y-2">
          <div className="text-center">
            <div className="inline-block p-4 rounded-lg bg-[#4C4452]">
              <BiSupport className="text-white text-3xl" />
            </div>
          </div>
          <h2 className="text-lg lg:text-2xl font-bold text-center">
            24/7{' '} <span>{text}</span>
          </h2>
          <p className="text-center">
            24/7 support ensures peace of mind, offering assistance whenever it
            is needed, day or night.
          </p>
          <div className="text-center">
            <Button className="bg-[#4C4452] hover:scale-105 mt-2">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportService