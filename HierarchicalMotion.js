function setup() { "use strict";

    var canvas = document.getElementById('myCanvas');
    var x1 = 40;
    var y1 = canvas.height - 32;
    var x2 = 170;
    var y2 = canvas.height - 32;
    var deg = 1;
    var c1 = 100;

    function draw() {

        var context = canvas.getContext('2d');
        var angle = 0;
        var rayAngle = 0;
        var windowSpace = 435;

        var wheelWidth = 60;
        var wheelHeight = 60;
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        //Sky
        context.beginPath();
        context.rect(canvas.width/2-400,canvas.height/2-400,800,800);
        context.fillStyle = "#87CEEB";
        context.fill();

        //Grass Hill - Green (Scaled Circle)
        context.save();
        context.scale(2,1);
        context.beginPath();
        context.strokeStyle = "#2E8B57";
        context.lineWidth = 3;
        context.fillStyle = "#32CD32";
        context.arc(55,220,60,0,2*Math.PI);
        context.fill();
        context.stroke();
        context.restore();

        //Grass Ground - Green (Rectangle)
        context.beginPath();
        context.strokeStyle = "#2E8B57";
        context.lineWidth = 3;
        context.rect(canvas.width/2-400,canvas.height/2+10,800,100);
        context.fillStyle = "#32CD32";
        context.fill();
        context.stroke();

        //Grass Hill - Green (Scaled Circle)
        context.save();
        context.scale(2,1);
        context.beginPath();
        context.fillStyle = "#32CD32";
        context.arc(55,220,60,0,2*Math.PI);
        context.fill();
        context.restore();

        //Lines in Wind Turbine - Dark Grey

        //First (Bottom) - Dark Grey
        context.beginPath();
        context.lineWidth = 7;
        context.strokeStyle = "#708090";
        context.moveTo(305,225);
        context.lineTo(340,225);
        context.stroke();

        //Second - Dark Grey
        context.beginPath();
        context.lineWidth = 7;
        context.strokeStyle = "#708090";
        context.moveTo(305,205);
        context.lineTo(335,205);
        context.stroke();

        //Third - Dark Grey
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "#708090";
        context.moveTo(306,185);
        context.lineTo(335,185);
        context.stroke();

        //Fourth - Dark Grey
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "#708090";
        context.moveTo(308,165);
        context.lineTo(327,165);
        context.stroke();

        //Fifth (Top) - Dark Grey
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "#708090";
        context.moveTo(313,145);
        context.lineTo(326,145);
        context.stroke();

        //Wind Turbine - Dark Grey (Tower)
        context.beginPath();
        context.lineWidth = 7;
        context.strokeStyle = "#708090";
        context.moveTo(300,242);
        context.lineTo(320,100);
        context.lineTo(340,242);
        context.stroke();

        //Wind Turbine - Light Grey (Tower)
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.moveTo(300,240);
        context.lineTo(320,100);
        context.lineTo(340,240);
        context.stroke();

        //Lines in Wind Turbine - Light Grey

        //First (Bottom) - Light Grey
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.moveTo(302,225);
        context.lineTo(339,225);
        context.stroke();

        //Second - Light Grey
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.moveTo(305,205);
        context.lineTo(335,205);
        context.stroke();

        //Third - Light Grey
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.moveTo(307,185);
        context.lineTo(333,185);
        context.stroke();

        //Fourth - Light Grey
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.moveTo(310,165);
        context.lineTo(329,165);
        context.stroke();

        //Fifth (Top) - Light Grey
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.moveTo(313,145);
        context.lineTo(326,145);
        context.stroke();

        //Sidewalk - Grey (Path)
        context.beginPath();
        context.lineWidth = 3;
        context.strokeStyle = "#000000";
        context.rect(0,canvas.height-90,800,80);
        context.fillStyle = "#B0C4DE";
        context.fill();
        context.stroke();

        //Lines on Wind Turbine
        for (var t = 0; t < 12; t++) {
            context.save();
            context.beginPath();
            context.strokeStyle = "#708090";
            context.lineWidth = 7;
            context.translate(320, 80);
            context.rotate(Math.PI * 2 * (deg / 360) - Math.PI / 2);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(Math.min(wheelWidth, wheelHeight) / 2 * Math.cos(Math.PI * angle/180),
                Math.min(wheelWidth, wheelHeight) / 2 * Math.sin(Math.PI * angle/180));
            context.stroke();
            context.restore();

            context.save();
            context.beginPath();
            context.strokeStyle = "#B0C4DE";
            context.lineWidth = 2;
            context.translate(320, 80);
            context.rotate(Math.PI * 2 * (deg / 360) - Math.PI / 2);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(Math.min(wheelWidth, wheelHeight) / 2.25 * Math.cos(Math.PI * angle/180),
                Math.min(wheelWidth, wheelHeight) / 2.25 * Math.sin(Math.PI * angle/180));
            context.stroke();
            context.restore();

            angle += 30;
        }

        //Blue Circle in Turbine
        context.beginPath();
        context.arc(320,80,12,0,2*Math.PI);
        context.fillStyle = "#87CEEB";
        context.fill();

        //Lines Connecting Wind Turbine
        for (var s = 0; s < 12; s++) {
            context.save();
            context.beginPath();
            context.strokeStyle = "#000000";
            context.lineWidth = 3;
            context.translate(320, 80);
            context.rotate(Math.PI * 2 * (deg / 360) - Math.PI / 2);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(Math.min(wheelWidth, wheelHeight) / 4 * Math.cos(Math.PI * angle/180),
                Math.min(wheelWidth, wheelHeight) / 4 * Math.sin(Math.PI * angle/180));
            context.stroke();
            context.restore();
            angle += 30;
        }

        //Grey Circle in Turbine
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "#000000";
        context.arc(320,80,5,0,2*Math.PI);
        context.fillStyle = "#B0C4DE";
        context.fill();
        context.stroke();

        //Black Circle in Turbine
        context.beginPath();
        context.arc(320,80,1,0,2*Math.PI);
        context.fillStyle = "#000000";
        context.fill();

        //Even-Off Back Roof
        context.beginPath();
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = "9";
        context.fillStyle = "#B0C4DE";
        context.moveTo(568,170);
        context.lineTo(398,170);
        context.stroke();
        context.fill();

        //Fill Roof
        context.beginPath();
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = "9";
        context.fillStyle = "#B0C4DE";
        context.moveTo(400,170);
        context.lineTo(440,132);
        context.lineTo(527,133);
        context.lineTo(565,170);
        context.fill();
        context.stroke();

        //Barn - Red (Rectangle)
        context.beginPath();
        context.fillStyle = "#DC143C";
        context.strokeStyle = "#8B0000";
        context.lineWidth = 5;
        context.rect(420, 150, 125, 100);
        context.fill();
        context.stroke();

        //Barn Door Right - White (Rectangle)
        context.beginPath();
        context.fillStyle = "#FFFAFA";
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = 2;
        context.rect(482, 208.5, 30, 43);
        context.fill();
        context.stroke();

        //Barn Door Left - White (Rectangle)
        context.beginPath();
        context.fillStyle = "#FFFAFA";
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = 2;
        context.rect(451, 208.5, 30, 43);
        context.fill();
        context.stroke();

        //Draw Barn Windows - White (Rectangle)
        for(var w = 0; w < 3; w++) {
            //Window Frame
            context.beginPath();
            context.fillStyle = "#FFFAFA";
            context.strokeStyle = "#B0C4DE";
            context.lineWidth = 2;
            context.rect(windowSpace, 170, 15, 15);
            context.fill();
            context.stroke();

            //Lines in Windows - Horizontal
            context.beginPath();
            context.strokeStyle = "#000000";
            context.lineWidth = 2;
            context.moveTo(windowSpace+15, 177.5);
            context.lineTo(windowSpace, 177.5);
            context.stroke();

            //Lines in Windows - Vertical
            context.beginPath();
            context.strokeStyle = "#000000";
            context.lineWidth = 2;
            context.moveTo(windowSpace+7.5, 185);
            context.lineTo(windowSpace+7.5, 170);
            context.stroke();

            windowSpace += 40;
        }

        //Roof of Barn - Left Side
        context.beginPath();
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = "9";
        context.moveTo(400,170);
        context.lineTo(440,132);
        context.stroke();

        //Roof of Barn - Right Side
        context.beginPath();
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = "9";
        context.moveTo(525,132);
        context.lineTo(565,170);
        context.stroke();

        //Even-Off Back Roof
        context.beginPath();
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = "9";
        context.fillStyle = "#B0C4DE";
        context.moveTo(418,150);
        context.lineTo(540,150);
        context.stroke();
        context.fill();

        //Front Left Roof Outline
        context.save();
        context.beginPath();
        context.moveTo(394,172);
        context.lineTo(418,172);
        context.strokeStyle = "#708090";
        context.lineWidth = "3";
        context.stroke();

        //Front Right Roof Outline
        context.save();
        context.beginPath();
        context.moveTo(548,172);
        context.lineTo(571,172);
        context.strokeStyle = "#708090";
        context.lineWidth = "3";
        context.stroke();

        //Top Roof Outline
        context.save();
        context.beginPath();
        context.moveTo(435,128);
        context.lineTo(530,128);
        context.strokeStyle = "#708090";
        context.lineWidth = "3";
        context.stroke();

        //Right Slanted Roof Outline
        context.save();
        context.beginPath();
        context.moveTo(529,127);
        context.lineTo(571,172);
        context.strokeStyle = "#708090";
        context.lineWidth = "3";
        context.stroke();

        //Left Slanted Roof Outline
        context.save();
        context.beginPath();
        context.moveTo(436,127);
        context.lineTo(394,172);
        context.strokeStyle = "#708090";
        context.lineWidth = "3";
        context.stroke();

        //Barn - Top Line
        context.save();
        context.beginPath();
        context.moveTo(417, 157);
        context.lineTo(548, 157);
        context.strokeStyle = "#8B0000";
        context.lineWidth = 5;
        context.stroke();
        context.restore();

        //Sidewalk Tiles
        var sideWalkDist = 0;
        for(var v = 0; v < 10; v++) {
            context.beginPath();
            context.rect(sideWalkDist,canvas.height-90,75,80);
            context.strokeStyle = "#000000";
            context.lineWidth = 2;
            context.stroke();
            sideWalkDist += 75;
        }

        //Road - Grey (Path)
        context.save();
        context.translate(canvas.width/2,canvas.height/2);
        context.beginPath();
        context.strokeStyle = "#000000";
        context.lineWidth = 3;
        context.rect(-400,150,800,100);
        context.fillStyle = "#696969";
        context.fill();
        context.stroke();
        context.restore();

        //Sun Rays - Small (Circle)
        for (var q = 0; q < 12; q++) {
            context.save();
            context.beginPath();
            context.strokeStyle = "#FF8300";
            context.lineWidth = "3";
            context.fillStyle = "#ffff33";
            context.translate(canvas.width, 0);
            context.rotate(Math.PI * 2 * (deg / 360) - Math.PI / 2);
            context.arc(70 * Math.cos(Math.PI * rayAngle / 180), 70 * Math.sin(Math.PI * rayAngle / 180),
                12, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
            rayAngle += 30;
            context.restore();
        }

        //Sun Rays - Large (Circle)
        for (var b = 0; b < 12; b++) {
            context.save();
            context.beginPath();
            context.strokeStyle = "#FF8300";
            context.lineWidth = "3";
            context.fillStyle = "#ffff33";
            context.translate(canvas.width, 0);
            context.rotate(Math.PI * 2 * (deg / 360) - Math.PI / 2);
            context.arc(68 * Math.cos(Math.PI * rayAngle / 180), 68 * Math.sin(Math.PI * rayAngle / 180),
                16,0,2*Math.PI);
            context.fill();
            context.stroke();
            rayAngle += 60;
            context.restore();
        }

        //Sun
        context.beginPath();
        context.arc(canvas.width,0,70,0,2*Math.PI);
        context.strokeStyle = "#FF8300";
        context.lineWidth = "3";
        context.fillStyle = "#ffff33";
        context.fill();
        context.stroke();

        //Details in Rays
        for (var a = 0; a < 12; a++) {
            context.save();
            context.beginPath();
            context.fillStyle = "#ffff33";
            context.translate(canvas.width, 0);
            context.rotate(Math.PI * 2 * (deg / 360) - Math.PI / 2);
            context.arc(68 * Math.cos(Math.PI * rayAngle / 180), 68 * Math.sin(Math.PI * rayAngle / 180),
                14,0,2*Math.PI);
            context.fill();
            rayAngle += 60;
            context.restore();
        }

        //Clouds

        //Third Cloud
        context.beginPath();
        context.arc(c1+100,0,50,0,2*Math.PI);
        context.strokeStyle = "#C2C2C2";
        context.lineWidth = 3;
        context.fillStyle = "#FCFCFC";
        context.fill();
        context.stroke();

        //Fourth Cloud
        context.beginPath();
        context.arc(c1+150,0,30,0,2*Math.PI);
        context.strokeStyle = "#C2C2C2";
        context.lineWidth = 3;
        context.fillStyle = "#FCFCFC";
        context.fill();
        context.stroke();

        //Second Cloud
        context.beginPath();
        context.arc(c1+45,10,35,0,2*Math.PI);
        context.strokeStyle = "#C2C2C2";
        context.lineWidth = 3;
        context.fillStyle = "#FCFCFC";
        context.fill();
        context.stroke();

        //First Cloud
        context.beginPath();
        context.arc(c1,10,25,0,2*Math.PI);
        context.strokeStyle = "#C2C2C2";
        context.lineWidth = 3;
        context.fillStyle = "#FCFCFC";
        context.fill();
        context.stroke();

        //Hide Black Lines - Middle Cloud
        context.beginPath();
        context.arc(c1+100,0,47,0,2*Math.PI);
        context.fillStyle = "#FCFCFC";
        context.fill();

        //Hide Black Lines - Third Cloud
        context.beginPath();
        context.arc(c1+45,10,33,0,2*Math.PI);
        context.fillStyle = "#FCFCFC";
        context.fill();

        //Road Marks - Black (Outline)
        context.save();
        context.beginPath();
        context.setLineDash([100,90]);
        context.moveTo(0,canvas.height);
        context.lineTo(canvas.width, canvas.height);
        context.lineWidth = 22;
        context.strokeStyle = "#000000";
        context.stroke();
        context.restore();

        //Road Marks - Yellow
        context.save();
        context.beginPath();
        context.setLineDash([100,90]);
        context.moveTo(0,canvas.height);
        context.lineTo(canvas.width, canvas.height);
        context.lineWidth = 18;
        context.strokeStyle = "#FFFF33";
        context.stroke();
        context.restore();

        //Spokes for both wheels
        for (var i = 0; i < 12; i++) {

            //Spokes for Wheel Two
            context.save();
            context.beginPath();
            context.strokeStyle = "white";
            context.lineWidth = 2;
            context.translate(x2, y2);
            context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(Math.min(wheelWidth, wheelHeight) / 2 * Math.cos(Math.PI * angle/180),
                Math.min(wheelWidth, wheelHeight) / 2 * Math.sin(Math.PI * angle/180));
            context.stroke();
            angle += 30;
            context.restore();

            //Spokes for Wheel One
            context.save();
            context.beginPath();
            context.strokeStyle = "white";
            context.lineWidth = 2;
            context.translate(x1, y1);
            context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(Math.min(wheelWidth, wheelHeight) / 2 * Math.cos(Math.PI * angle/180),
                Math.min(wheelWidth, wheelHeight) / 2 * Math.sin(Math.PI * angle/180));
            context.stroke();
            context.restore();
        }

        //Wheel One - Black and White
        context.save();
        context.beginPath();
        context.translate(x1,y1);
        context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
        context.strokeStyle = "#000000";
        context.lineWidth = 4;
        context.arc(0, 0, 30, 0, 2 * Math.PI);
        context.stroke();
        context.restore();

        //Wheel One - Grey
        context.save();
        context.beginPath();
        context.translate(x1,y1);
        context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = 3;
        context.arc(0, 0, 27, 0, 2 * Math.PI);
        context.stroke();
        context.restore();

        //Second Car Wheel - Black and White
        context.save();
        context.beginPath();
        context.translate(x2,y2);
        context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
        context.strokeStyle = "#000000";
        context.lineWidth = 3;
        context.arc(0, 0, 30, 0, 2 * Math.PI);
        context.stroke();
        context.restore();

        //Wheel Two - Grey
        context.save();
        context.beginPath();
        context.translate(x2,y2);
        context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = 3;
        context.arc(0, 0, 27, 0, 2 * Math.PI);
        context.stroke();
        context.restore();

        //Bike Seat - Black (Below Seat)
        context.beginPath();
        context.moveTo(x1+12, y2-68);
        context.lineTo(x1+4,y2-80);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.stroke();

        //Bike Seat - Grey (Below Seat)
        context.beginPath();
        context.moveTo(x1+12, y2-68);
        context.lineTo(x1+4,y2-80);
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.stroke();

        //Bike Frame - Black (Left Wheel)
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2-73,y2);
        context.lineWidth = 9;
        context.strokeStyle = "#000000";
        context.stroke();

        //Bike Frame - Red (Left Wheel)
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2-73,y2);
        context.lineWidth = 5;
        context.strokeStyle = "#FF0000";
        context.stroke();

        //Bike Frame - Black (Bottom Right Wheel)
        context.beginPath();
        context.moveTo(x2-73,y2);
        context.lineTo(x2-22, y2-55);
        context.lineWidth = 9;
        context.strokeStyle = "#000000";
        context.stroke();

        //Bike Frame - Black (Seat)
        context.beginPath();
        context.moveTo(x1+12, y2-68);
        context.lineTo(x2-73,y2);
        context.lineWidth = 9;
        context.strokeStyle = "#000000";
        context.stroke();

        //Bike Frame - Black (Top Left Wheel)
        context.beginPath();
        context.moveTo(x1+20, y2-55);
        context.lineTo(x1,y1);
        context.lineWidth = 9;
        context.strokeStyle = "#000000";
        context.stroke();

        //Bike Frame - Black (Middle Bar)
        context.beginPath();
        context.moveTo(x2-22, y2-55);
        context.lineTo(x1+20, y2-55);
        context.lineWidth = 9;
        context.strokeStyle = "#000000";
        context.stroke();

        //Bike Frame - Black (Top Right Wheel)
        context.beginPath();
        context.moveTo(x2-35,y2-80);
        context.lineTo(x2, y2);
        context.lineWidth = 9;
        context.strokeStyle = "#000000";
        context.stroke();

        //Bike Frame - Red (Top Right Wheel)
        context.beginPath();
        context.moveTo(x2-35,y2-80);
        context.lineTo(x2, y2);
        context.lineWidth = 5;
        context.strokeStyle = "#FF0000";
        context.stroke();

        //Bike Frame - Red (Bottom Right Wheel)
        context.beginPath();
        context.moveTo(x2-73,y2);
        context.lineTo(x2-22, y2-55);
        context.lineWidth = 5;
        context.strokeStyle = "#FF0000";
        context.stroke();

        //Bike Frame - Red (Seat)
        context.beginPath();
        context.moveTo(x1+12, y2-68);
        context.lineTo(x2-73,y2);
        context.lineWidth = 5;
        context.strokeStyle = "#FF0000";
        context.stroke();

        //Bike Frame - Red (Middle Bar)
        context.beginPath();
        context.moveTo(x2-22, y2-55);
        context.lineTo(x1+20, y2-55);
        context.lineWidth = 5;
        context.strokeStyle = "#FF0000";
        context.stroke();

        //Bike Frame - Red (Top Left Wheel)
        context.beginPath();
        context.moveTo(x1+20, y2-55);
        context.lineTo(x1,y1);
        context.lineWidth = 5;
        context.strokeStyle = "#FF0000";
        context.stroke();

        //Black Circle on Back Wheel
        context.beginPath();
        context.arc(x1,y1,6,0,2*Math.PI);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.fillStyle = "#B0C4DE";
        context.fill();
        context.stroke();

        //Line Separating Frame and Seat
        context.beginPath();
        context.moveTo(x1+12, y2-68);
        context.lineTo(x1+11.5,y2-68.5);
        context.lineWidth = 3;
        context.strokeStyle = "#000000";
        context.stroke();

        //Black Circle on Back Wheel
        context.beginPath();
        context.arc(x2,y2,6,0,2*Math.PI);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.fillStyle = "#B0C4DE";
        context.fill();
        context.stroke();

        //Grey Circle for Pedal
        context.beginPath();
        context.arc(x2-67,y2,15,0,2*Math.PI);
        context.lineWidth = 3;
        context.strokeStyle = "#000000";
        context.fillStyle = "#B0C4DE";
        context.fill();
        context.stroke();

        //Red Circle for Pedal
        context.beginPath();
        context.arc(x2-67,y2,10,0,2*Math.PI);
        context.lineWidth = 3;
        context.strokeStyle = "#000000";
        context.fillStyle = "#FF0000";
        context.fill();
        context.stroke();

        //Line for Pedal - Black
        context.save();
        context.beginPath();
        context.strokeStyle = "#000000";
        context.lineWidth = 5;
        context.translate(x2-67.5, y2);
        context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(Math.min(wheelWidth, wheelHeight) / 2 * Math.cos(Math.PI * angle/180),
            Math.min(wheelWidth, wheelHeight) / 2 * Math.sin(Math.PI * angle/180));
        context.stroke();
        context.restore();

        //Line for Pedal - Grey
        context.save();
        context.beginPath();
        context.strokeStyle = "#B0C4DE";
        context.lineWidth = 2;
        context.translate(x2-67.5, y2);
        context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(Math.min(wheelWidth, wheelHeight) / 2 * Math.cos(Math.PI * angle/180),
            Math.min(wheelWidth, wheelHeight) / 2 * Math.sin(Math.PI * angle/180));
        context.stroke();
        context.restore();

        //Black Circle for Pedal
        context.beginPath();
        context.arc(x2-67,y2,5,0,2*Math.PI);
        context.fillStyle = "#000000";
        context.fill();

        //Bike Pedal - Black (Rectangle)
        context.save();
        context.beginPath();
        context.strokeStyle = "#000000";
        context.lineWidth = 4;
        context.translate(x2-67.5, y2);
        context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
        context.rect(30,-10,6,18);
        context.fillStyle = "#000000";
        context.fill();
        context.restore();

        //Bike Pedal - Yellow (Rectangle)
        context.save();
        context.beginPath();
        context.strokeStyle = "#000000";
        context.lineWidth = 4;
        context.translate(x2-67.5, y2);
        context.rotate(Math.PI * 2 * (deg / 90) - Math.PI / 2);
        context.rect(31.75,-7.5,2.25,13);
        context.fillStyle = "#FFFF33";
        context.fill();
        context.restore();

        //Handle Bars - Black (Bar)
        context.beginPath();
        context.moveTo(x2-35,y2-80);
        context.lineTo(x2-39, y2-90);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.stroke();

        //Handle Bars - Black (Bar)
        context.beginPath();
        context.moveTo(x2-39, y2-90);
        context.lineTo(x2-42, y2-92);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.stroke();

        context.beginPath();
        context.moveTo(x2-39, y2-90);
        context.lineTo(x2-40, y2-92);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.stroke();

        context.beginPath();
        context.moveTo(x2-42, y2-92);
        context.lineTo(x2-45, y2-94);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.stroke();

        context.beginPath();
        context.moveTo(x2-45, y2-94);
        context.lineTo(x2-47, y2-96);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.stroke();

        context.beginPath();
        context.moveTo(x2-45, y2-95);
        context.lineTo(x2-70, y2-95);
        context.lineWidth = 7;
        context.strokeStyle = "#000000";
        context.stroke();

        //Handle Bars - Grey (Bar)
        context.beginPath();
        context.moveTo(x2-35,y2-80);
        context.lineTo(x2-39, y2-90);
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.stroke();

        context.beginPath();
        context.moveTo(x2-39, y2-90);
        context.lineTo(x2-42, y2-92);
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.stroke();

        context.beginPath();
        context.moveTo(x2-42, y2-92);
        context.lineTo(x2-45, y2-94);
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.stroke();

        context.beginPath();
        context.moveTo(x2-45, y2-94);
        context.lineTo(x2-47, y2-96);
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.stroke();

        context.beginPath();
        context.moveTo(x2-45, y2-95);
        context.lineTo(x2-70, y2-95);
        context.lineWidth = 2;
        context.strokeStyle = "#B0C4DE";
        context.stroke();

        //Handle Bar Grip - Black
        context.beginPath();
        context.moveTo(x2-47, y2-95);
        context.lineTo(x2-70, y2-95);
        context.lineWidth = 10;
        context.strokeStyle = "#000000";
        context.stroke();

        //Handle Bar Grip - Brown
        context.beginPath();
        context.moveTo(x2-50, y2-95);
        context.lineTo(x2-67, y2-95);
        context.lineWidth = 5;
        context.strokeStyle = "#A0522D";
        context.stroke();

        //Seat - Brown (Square)
        context.beginPath();
        context.rect(x1+1,y2-92.2,20,7);
        context.strokeStyle = "#000000";
        context.lineWidth = 4.73;
        context.stroke();

        //Seat - Brown (Circle)
        context.beginPath();
        context.arc(x1,y2-86,7,0,2*Math.PI);
        context.fillStyle = "#A0522D";
        context.strokeStyle = "#000000";
        context.lineWidth = 3;
        context.fill();
        context.stroke();

        //Seat - Brown (Square)
        context.beginPath();
        context.rect(x1+1,y2-92.2,20,7);
        context.fillStyle = "#A0522D";
        context.fill();

        //Seat - Black (Circle)
        context.beginPath();
        context.arc(x1+12.5,y2-83,5,0,2*Math.PI);
        context.fillStyle = "#000000";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+15,y2-83,5,0,2*Math.PI);
        context.fillStyle = "#000000";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+16,y2-84,5,0,2*Math.PI);
        context.fillStyle = "#000000";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+17,y2-84,5,0,2*Math.PI);
        context.fillStyle = "#000000";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+20,y2-84,5,0,2*Math.PI);
        context.fillStyle = "#000000";
        context.lineWidth = 3;
        context.fill();

        //Seat - Green (Circle)
        context.beginPath();
        context.arc(x1+14,y2-80,5,0,2*Math.PI);
        context.fillStyle = "##32CD32";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+15,y2-80,5,0,2*Math.PI);
        context.fillStyle = "#32CD32";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+16,y2-80,5,0,2*Math.PI);
        context.fillStyle = "#32CD32";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+17,y2-82,5,0,2*Math.PI);
        context.fillStyle = "#32CD32";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+20,y2-82,5,0,2*Math.PI);
        context.fillStyle = "#32CD32";
        context.lineWidth = 3;
        context.fill();

        context.beginPath();
        context.arc(x1+23,y2-82,5,0,2*Math.PI);
        context.fillStyle = "#32CD32";
        context.lineWidth = 3;
        context.fill();

        //Bike Seat - Black (circle)
        context.beginPath();
        context.arc(x1+23,y2-91,3.5,0,2*Math.PI);
        context.fillStyle = "#000000";
        context.fill();

        //Bike Seat - Brown (Circle)
        context.beginPath();
        context.arc(x1+23,y2-91,1.5,0,2*Math.PI);
        context.fillStyle = "#A0522D";
        context.fill();

        //Bike Seat - Brown (Line)
        context.beginPath();
        context.rect(x1+12.5,y2-92.3,10,3);
        context.fillStyle = "#A0522D";
        context.fill();

        x1 = (x1 + 3) % 850;
        x2 = (x1 + 130);
        c1 = (c1 + 1) % 850;
        deg += 1;

        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
window.onload = setup;