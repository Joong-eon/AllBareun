package com.allbareun.web.dao;

import com.allbareun.web.entity.Group;

public interface GroupDao {

	int insert(Group group);
	int delete(int goalId, int userId);

}
