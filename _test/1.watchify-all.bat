
chcp 936

set watchifyPath="C:\Users\Administrator\AppData\Roaming\npm\watchify.cmd"

%watchifyPath% -o ./all.bundle.js -v ^
	-r ../dom/addEventListener.js:addEventListener ^
	-r ../dom/removeEventListener.js:removeEventListener ^
	-r ../dom/getEventOffsetXy.js:getEventOffsetXy ^
	-r ../js/function/bind.js:bind ^


pause
