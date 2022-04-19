import Image from 'react-bootstrap/Image'
import Badge from './Badge'
import '../css/Achievements.css'

const Achievement = ({donut, badge, title, description, level}) => {
  return (
    //   Whole Card
    <div className='achv row border border-dark rounded mb-10'>
        {/* LeftSide */}
        <div className='achv-info col-lg-4 d-flex align-items-center justify-content-center border' id='achv-progress'>
            <div className='row d-flex align-items-center'>
                <div className="col-md col-lg acvh-iholder d-flex justify-content-center">
                    {donut}
                </div>
                <div className="col-md col-lg acvh-iholder">
                    <Badge id="achv-badge" badge_id={badge} badge_level={level}></Badge>
                </div> 
            </div>
        </div>
        {/* Right Side */}
        <div className='achv-info col-lg-8' id='achv-achv-description'>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    </div>
  )
}

export default Achievement