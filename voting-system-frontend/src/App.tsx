import React from 'react';
import MarksTable from './tables/MarksTable';
import LectureTable from './tables/LectureTable';
import MainInfoList from './common/MainInfoList';

//import ReactDOM from 'react-dom';

function App() {
  return (
    <>
   <div>
<div className="css-10hburv-MuiTypography-root"style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>Шановні студенти!<br/>
 КНУ проводить щосеместрове опитування здобувачів вищої освіти з метою оцінки якості викладання дисциплін.<br/>
Ваші відповіді допоможуть оцінити якість викладання та вплинути на зміни до навчальних дисциплін.<br/>
Опитування є повністю анонімним і його результати будуть використані виключно в узагальненому вигляді. <br/>
Сама Ваша об’єктивна думка дуже важлива для нас! 
</div>
<MainInfoList/>
</div>
<div>Позначте, будь ласка, якою мірою Ви погоджуєтесь із наведеними нижче твердженнями стосовно викладача, який читає лекції, використовуючи наведену шкалу:</div>  
<MarksTable/>
<div>Відповідь дайте, будь ласка, за кожним рядком таблиці.</div>
<LectureTable/>
    </>
  );
}

export default App;