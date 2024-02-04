import ActionAreaCard from "./components/Viewcards";


export default function Home() {
  return (
<div className="max-w-6xl mx-auto flex flex-col justify-center items-center mt-20">
<ActionAreaCard className="m-10 p-8" imagePath="/scene1.jpeg" 
content="Lizards are a widespread group of squamate reptiles, with over 6,000
species, ranging across all continents except Antarctica"/>
<ActionAreaCard className="m-10 p-8" imagePath="/scene1.jpeg"/>
<ActionAreaCard className="m-10 p-8" imagePath="/scene1.jpeg"/>
<ActionAreaCard className="m-10 p-8" imagePath="/scene1.jpeg"/>
</div>
  );
}
