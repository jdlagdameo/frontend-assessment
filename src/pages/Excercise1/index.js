/**
 * Excerise 1
 * 
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 03/07/2023 
 * 
 * @internal revisions:
 * + 
 * + 
 * + 
 * 
 */
import CardDisplay from '../../components/CardDisplay';

const Exercise1 = () => {

  const descriptionArr = require('../../data/excercise1.data.json');

  return (
    <div className="container-fluid p-0 m-0">

        {/* Banner */}
        <div className='banner section'>
          <div className="banner__text">
            <h1 className='banner__text--header'>
              Hello Developer
            </h1>
            <p className='banner__text--description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        {/* Banner */}

        {/* Card List */}
        <div className='section container pt-5 pb-5'>
          <div className='row'>
            {descriptionArr.map(({ image, description }, i) => (
              <div 
                key={i} 
                className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch justify-content-center'>
                  <CardDisplay image={image} description={description} />
              </div>
            ))}
          </div>
        </div>
        {/* Card List */}

    </div>
  )
}
 
export default Exercise1;