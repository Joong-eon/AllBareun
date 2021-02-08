package com.allbareun.web.dao.mybatis;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.allbareun.web.dao.CycleDao;
import com.allbareun.web.entity.Cycle;

@Repository
public class MyBatisCycleDao implements CycleDao {

	@Autowired
	SqlSession session;
	
	@Override
	public int insert(Cycle cycle) {
		
		return session.getMapper(CycleDao.class).insert(cycle);
	}

	@Override
	public List<String> getDays(int goalId) {
		// TODO Auto-generated method stub
		return session.getMapper(CycleDao.class).getDays(goalId);
	}

}
