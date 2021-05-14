<template>
  <el-menu
    class="the-nav"
    :uniqueOpened="true"
    default-active="2"
    :router="true"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-user"></i>
        <span>超级用户/系统管理员</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/sup-list">管理订单列表</el-menu-item>
        <el-menu-item index="/sup-detail">管理订单详情</el-menu-item>
        <el-menu-item index="/sup-total">统计</el-menu-item>
        <el-menu-item index="/sup-manage">管理列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-user"></i>
        <span>内部客服</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/in-home">客服主页</el-menu-item>
        <el-menu-item index="/in-detail">客服订单详情</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template #title>
        <i class="el-icon-user"></i>
        <span>薪资客服</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/money-home">客服主页</el-menu-item>
        <el-menu-item index="/money-detail">客服订单详情</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template #title>
        <i class="el-icon-user"></i>
        <span>仓库</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/warehouse-in">仓库取货</el-menu-item>
        <el-menu-item index="/warehouse-send">仓库待发货</el-menu-item>
        <el-menu-item index="/warehouse-detail">仓库订单详情</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="scss" scoped>
.the-nav {
  width: 220px;
}
</style>
