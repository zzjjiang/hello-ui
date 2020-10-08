<template>
    <div>
        <h3>layout 4等分布局</h3>
        <el-row :gutter='20'>
            <el-col :span='6'><div class="context">1</div></el-col>
            <el-col :span='6'><div class="context">2</div></el-col>
            <el-col :span='6'><div class="context">3</div></el-col>
            <el-col :span='6'><div class="context">4</div></el-col>
        </el-row>

        <el-container :direction="vertical">
            <el-header height="">
                Header content
            </el-header>
            <el-container :direction="horizontal">
                <el-aside width="200px">
                    Aside content
                </el-aside>
                <el-container :direction="vertical">
                    <el-main height="">
                        Main content
                    </el-main>
                    <el-footer height="">
                        Footer content
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.context{
    background-color: antiquewhite;
    color: #000;
}
</style>
