import Arc      from "../../../../src/Sections/Entities/Entities/Arc";
import Point    from "../../../../src/Sections/Entities/Entities/Point";


describe('Arc', () => {
    const dataState = {
        instancesCount: 0
    }
    it('should return the subClassName given.', () => {
        const entity = new Arc(new Point(0, 0, 0), 120, 0, 120);
        dataState.instancesCount += 2;
        expect(entity.subclassMarker).toBe('AcDbCircle');
    });

    it('should return the center given.', () => {
        const entity = new Arc(new Point(10, 1250, 63.3), 120, 0, 120);
        dataState.instancesCount += 2;
        expect(entity.center.x).toBe(10);
        expect(entity.center.y).toBe(1250);
        expect(entity.center.z).toBe(63.3);
    });

    it('should return the start and end angle given.', () => {
        const entity = new Arc(new Point(10, 1250, 63.3), 120, 0, 120);
        dataState.instancesCount += 2;
        expect(entity.startAngle).toBe(0);
        expect(entity.endAngle).toBe(120);
    });

    it('should return the radius given.', () => {
        const entity = new Arc(new Point(10, 1250, 63.3), 120, 0, 120);
        dataState.instancesCount += 2;
        expect(entity.radius).toBe(120);
    });

    it('should return the correct dxf string.', () => {
        const entity = new Arc(new Point(10, 1250, 63.3), 120, 0, 120);
        dataState.instancesCount += 2;
        const handle = dataState.instancesCount.toString(16).toUpperCase();
        let entityString = `  0\nARC\n  5\n${handle}\n  100\nAcDbEntity\n  8\n0\n  100\nAcDbCircle\n`;
        entityString += `  10\n10\n  20\n1250\n  30\n63.3\n  40\n120\n  100\nAcDbArc\n  50\n0\n  51\n120\n`;
        expect(entity.stringify()).toBe(entityString);
    });
});
