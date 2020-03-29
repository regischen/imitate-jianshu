import styled from 'styled-components';
import pic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height : 56px;
    position : relative;
    border-bottom : 1px solid #e7e7e7;
`

export const Logo = styled.a.attrs({
    href : '/'
})`
    position : absolute;
    top : 0;
    left : 0;
    width : 100px;
    height : 56px;
    background : url(${pic});
    background-size : contain;
`

export const Nav = styled.div`
    width : 945px;
    height : inherit;
    margin: 0 auto;
    ${'' /* background : red;  */}
`

export const NavItem = styled.div`
    padding : 0 15px;
    line-height : 56px;
    &.left {
        float : left;
        color : #333;
    }
    &.right {
        float : right;
        color : #969696;
    }
    &.active {
        color : #ea6f5a
    }
`

export const SearchWrapper = styled.div`
    float : left;
    position : relative;
    .iconfont {
        position : absolute;
        bottom : 5px;
        right : 5px;
        width : 30px;
        line-height : 30px;
        border-radius: 15px;
        text-align : center;
        ${'' /* background : red; */}
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    box-sizing : border-box;
    width : 248px;
    height: 38px;
    padding: 0 20px;
    margin-top : 9px;
    margin-left : 20px;
    border: none;
    outline : none;
    border-radius : 19px;   
    background: #eee; 
    font-size : 14px;
    transition : width 0.3s ease-out;
    &:focus {
        width: 348px;
    }
    &::placeholder {
        color : #999;
    }

    &:focus ~ #searchinfo{
        opacity : 1;
        visibility: visible;
    }
`

export const SearchInfo = styled.div.attrs({
    id : 'searchinfo',
})`
    transition: all .2s;
    position : absolute;
    left : 20px;
    top : 56px;
    width : 240px;
    padding : 0 20px;
    box-shadow : 0 0 8px rgba(0,0,0,.15);
    opacity : 0;
    visibility: hidden;
    &:hover {
        opacity : 1;
        visibility: visible;
    }
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom : 15px;
    line-height: 20px;
    font-size: 14px;
    color : #969696;
`

export const SearchInfoSwitch = styled.span`
    float : right;
    font-size : 13px;
    cursor : pointer;
`
export const SearchInfoList = styled.div`
    ${'' /* overflow: hidden; */}
`
export const SearchInfoItem = styled.a`
    font-size: 12px;
    padding : 0 5px;
    line-height: 20px;
    border : 1px solid #ddd;
    color: #777;
    border-radius: 2px;
    display : block;
    float : left;
    margin-bottom: 15px;
    margin-right: 10px;
`

export const Addition = styled.div`
    position : absolute;
    top : 0;
    right : 0;
`

export const Button = styled.div`
    padding : 0 20px;
    height : 38px;
    border-radius: 19px;
    float : right;
    border: 1px solid #ec6149;
    line-height: 38px;
    margin : 9px 15px 0px 0px;

    &.write {
        color : #fff;
        background : #ec6149;
    }   
    &.res {
        color : #ec6149;
    }

`