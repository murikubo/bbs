import React, { useEffect, useState } from 'react'
import {app} from '../../firebaseini'
import { getDatabase, ref, get, set, onValue, remove } from 'firebase/database';
import { Table, Row, Col, InputGroup, Form, Button } from 'react-bootstrap'
const Favorite = () => {
    const [loading, setLoading] = useState(false);
    const db = getDatabase(app);
    const uid = sessionStorage.getItem('uid');
    const [page, setPage] = useState(1);
    const [locals, setLocals] = useState([]);
    const callAPI = () => {
        setLoading(true);
        onValue(ref(db, `favorite/${uid}`), snapshot=>{
            let rows=[];
            snapshot.forEach(row=>{
                rows.push({...row.val()});
            });
            console.log(rows);
            setLocals(rows);
            setLoading(false);
        })
    }
    const onClickDelete = async (local) =>{
        if(window.confirm(`${local.id}번 즐겨찾기를 삭제하시겠습니까?`)){
            setLoading(true)
            await remove(ref(db, `favorite/${uid}/${local.id}`))
            setLoading(false);
        }
    }
    useEffect(()=>{
        callAPI();
    }, []);
    if(loading) return <h1 className='my-5'>로딩중입니다...</h1>
  return (
    <div>
    <h1 className='my-5'>즐겨찾기</h1>
    <Row className='mb-2'>
        <Col xs={8} md={6} lg={4}>
        </Col>
    </Row>
    <Table striped bordered hover>
        <thead>
            <tr className='text-center'>
                <td>ID</td>
                <td>장소명</td>
                <td>주소</td>
                <td>전화</td>
                <td>삭제</td>
            </tr>
        </thead>
        <tbody>
            {locals.map(local=>
                <tr key={local.id}>
                    <td>{local.id}</td>
                    <td>{local.place_name}</td>
                    <td>{local.road_address_name}</td>
                    <td>{local.phone}</td>
                    <td><Button onClick={()=>onClickDelete(local)}>삭제</Button></td>
                </tr>
            )}
        </tbody>
    </Table>
    <div className='mb-5'>
        <Button onClick={()=>setPage(page-1)} disabled={page===1}>이전</Button>
        <span className='mx-3'>{page}</span>
        <Button onClick={()=>setPage(page+1)}>다음</Button>
    </div>
</div>
  )
}

export default Favorite