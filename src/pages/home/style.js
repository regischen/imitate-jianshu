import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin : 0 auto;
`;

export const HomeLeft = styled.div`
  float : left;
  margin-left : 15px;
  padding-top : 30px;
  width: 625px;

  .banner-img {
    width: 625px;
    height : 270px;
  }
`

export const HomeRight = styled.div`
  padding-top : 30px;
  width : 240px;
  float : right;
`

export const ListItem = styled.div`
  padding : 20px 0px 20px 0;
  border-bottom : 1px solid #f0f0f0;
  overflow : hidden;


  .left {
    width : 68%;
    float : left;
  }

  .right {
    width : 30%;
    float : right;
  }
  img {
    width : 150px;
    height : 100px;
    border-radius : 3px;
  }

  h2 {
    font-size : 18px;
    font-weight : 700;
    padding-bottom : 10px;
  }

  .headingLink {
    display : inline-block;
    text-decoration: none;
    color : #2f2f2f;  
  }

  .headingLink:link {
    color : #2f2f2f;  
  }
  .headingLink:visited {
    ${'' /* color : #969696;   */}
    color : #2f2f2f;  
  }


  p {
    font-size : 13px;
    color : #999999;
    line-height : 24px;
  }

`

export const RecommendItem = styled.img`
  width : 280px;
  height : 50px;
  margin-bottom : 6px;
`

export const LoadMore = styled.div`
  box-sizing: border-box;
  margin-top : 30px;
  height : 40px;
  padding : 10px 15px;
  text-align : center;
  background : #a5a5a5;
  border-radius : 20px;
  cursor : pointer;
`
export const ScrollToTop = styled.div`
  position : fixed;
  right : 50px;
  bottom : 50px;
  box-sizing : border-box;
  padding : 20px 0;
  width : 50px;
  height : 50px;
  border : 1px solid #ccc;
  font-size : 12px;
  cursor :pointer;
`