import { Injectable } from '@angular/core';
import { FrameContext } from '@farris/devkit';

@Injectable()
export class FYBXDJFrmFYBXDJExtendedServiceService {
    /**
     * 报销单据控制层服务构造函数
     * @param context 控制层服务上下文
     */
    constructor(private context: FrameContext) { }
    /**
     * 改变报销部门后，情况已选报销人
     */
    public clearEmployeeAfterDepartmentChanged() {
        this.context.bindingData.setValue(['employee', 'employee'], '');
        this.context.bindingData.setValue(['employee', 'employee_Code'], '');
        this.context.bindingData.setValue(['employee', 'employee_Name'], '');
    }
    /**
     * 为根组件的组织标识变量赋值
     */
    public setOrganization() {
        const rootUIState = this.context.appContext.getFrameContext('root-component').uiState;
        const currentDepartmentId = this.context.bindingData.getValue(['department', 'department']);
        rootUIState.setPropertyValue('orgId', currentDepartmentId);
    }
}
