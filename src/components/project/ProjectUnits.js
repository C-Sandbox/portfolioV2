import SVGImg from "../shared/SVGImg";
import "./ProjectUnits.css"
import "../../index.css"

function ProjectUnits(props) {
  const project = props.currentProject;
  const leftUnit = (obj, keyNum) => {
    return(
      <div className="ProjectUnits-unit left" key={"unit-" + keyNum}>
      <h3 className="ProjectUnits-title">{obj.name}</h3>
      <SVGImg currentImage={obj.image} />
      <p className="ProjectUnits-text">{obj.text}</p>
    </div>
    )
  }
  const rightUnit = (obj, keyNum) => {
    return(
      <div className="ProjectUnits-unit right" key={"unit-" + keyNum}>
      <h3 className="ProjectUnits-title">{obj.name}</h3>
      <SVGImg currentImage={obj.image} />
      <p className="ProjectUnits-text">{obj.text}</p>
    </div>
    )
  }
  const renderUnits = () => {
    return(
      project.units.map((unit, i) => {
        return(
          i % 2 === 0 ?  
            leftUnit(unit, i) : rightUnit(unit, i)
        )
      })
    )
  }
  return(
    <div className="ProjectUnits">
      {renderUnits()}
    </div>
  )
}
export default ProjectUnits;