(function (global) {
    const ORGANIZATION_UNITS = Object.freeze([
        { id: 'hr', name: 'منابع انسانی' },
        { id: 'rnd', name: 'تحقیق و توسعه' },
        { id: 'supply-chain', name: 'زنجیره تأمین' },
        { id: 'marketing', name: 'مارکتینگ' },
        { id: 'sales', name: 'فروش' },
        { id: 'systems', name: 'سیستم ها و روش ها' },
        { id: 'business-dev', name: 'توسعه کسب و کار' },
        { id: 'finance', name: 'مالی' },
        { id: 'audit', name: 'حسابرسی' },
        { id: 'legal', name: 'حقوقی' },
    ]);

    function populateDepartmentSelect(selectElement, options = ORGANIZATION_UNITS) {
        if (!selectElement || !Array.isArray(options)) {
            return;
        }

        const previouslySelectedId = selectElement.dataset.selectedId || '';
        const previouslySelectedValue = selectElement.value;

        selectElement
            .querySelectorAll('option[data-dynamic="department-option"]')
            .forEach(option => option.remove());

        options.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.name;
            option.textContent = unit.name;
            option.dataset.id = unit.id;
            option.dataset.dynamic = 'department-option';

            if (previouslySelectedId === unit.id || previouslySelectedValue === unit.name) {
                option.selected = true;
            }

            selectElement.appendChild(option);
        });
    }

    function getSelectedDepartmentId(selectElement) {
        if (!selectElement || !selectElement.selectedOptions || !selectElement.selectedOptions.length) {
            return '';
        }

        return selectElement.selectedOptions[0].dataset.id || '';
    }

    function getDepartmentNameById(id, options = ORGANIZATION_UNITS) {
        const match = options.find(unit => unit.id === id);
        return match ? match.name : '';
    }

    global.ORGANIZATION_UNITS = ORGANIZATION_UNITS;
    global.populateDepartmentSelect = populateDepartmentSelect;
    global.getSelectedDepartmentId = getSelectedDepartmentId;
    global.getDepartmentNameById = getDepartmentNameById;
})(window);

