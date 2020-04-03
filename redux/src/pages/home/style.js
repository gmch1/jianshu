import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`
export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-image{
        width:625px;
        height:270px;
    }
`
export const HomeRight = styled.div`
    float:right;
    width:240px;
`

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    margin-left:-18px;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;

`
export const TopicItem = styled.div`
    float:left;
    height:32px;
    margin-left:18px;
    line-height:37px;
    padding-right:10px;
    background-color:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-bottom:18px;
    .topic-pic{
        margin-right:10px;
        display:block;
        float:left;
        width:32px;
        height:32px;
    }
`
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:20px;
`
export const RecommendItem = styled.div`
    width:300px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`
export const LOadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor: pointer;
`

export const BackTop = styled.div`
    position:fixed;
    right:30px;
    bottom:30px;
    width:60px;
    height:60px;
    line-height:75px;
    text-align:center;
    border:1px solid #ccc;
    font-size:34px;
    color:#3c3c3c;
    user-select:none;
    cursor: pointer;

    
`