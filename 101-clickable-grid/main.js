/**
 * Created by newraina on 2015/10/24 0024.
 */

function addLoadEvent(func) {
    // ��func������window.onload�¼�������
    // ����Ѿ��󶨹�����������º���׷�ӵ�����ָ��ĩβ
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}