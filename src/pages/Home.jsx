import headerBg from '../images/header.png'
import './home.scss'
import {Chart1} from '../components/chart-1'
import {Chart2} from '../components/chart-2'

function Home(){
  return (
    <div className='home'>
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="section2">
        </section>
        <section className="bordered section3">
        </section>
        <section className="section4">
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div className="charts">
            </div>
          </div>
          <div className="bordered row2 案发街道">
            <h2>案发街道统计</h2>
            <div className="charts">
            </div>
          </div>
          <div className="bordered row3 作案手段">
            <h2>作案手段分析</h2>
          </div>
        </section>
      </main>
      <footer>
        &copy;
      </footer>
    </div>
  )
}

export {Home}