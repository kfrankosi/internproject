'''
Author: Landen Blackburn
7-18-2018

Wrapper class for accessing the AFSDK with python. Use as you please.
'''

import sys
sys.path.append('C:\\Program Files (x86)\\PIPC\\AF\\PublicAssemblies\\4.0\\')
import clr
clr.AddReference('OSIsoft.AFSDK')

# the example code I am referencing just used import *, but I'd rather see what I'm working with
# https://pisquare.osisoft.com/community/developers-club/pi-net-framework-pi-af-sdk/blog/2017/03/30/python-36-and-afsdk-example

#from OSIsoft.AF.PI import *
from OSIsoft.AF.PI import PIServers, PIPoint
#from OSIsoft.AF.Search import *
#from OSIsoft.AF.Asset import *
from OSIsoft.AF.Asset import AFValue
#from OSIsoft.AF.Data import *
from OSIsoft.AF.Data import AFUpdateOption, AFBufferOption
#from OSIsoft.AF.Time import *
from OSIsoft.AF.Time import AFTimeRange, AFTimeSpan, AFTime

# class for dealing with datetimes (keep in mind that I haven't set it up to deal with timezones, it just uses the local time)
from datetime import datetime, timedelta
# here is the datetiem format used by PI
datetime_format = '%m/%d/%Y %I:%M:%S %p'


class PI_server:

    def __init__(self, serverName):
        self.connect_to_Server(serverName)

    def connect_to_Server(self, serverName):
        '''
        You don't need to ever use this method, since the init method calls it for you
        '''
        piServers = PIServers()

        self.piServer = piServers[serverName]
        self.piServer.Connect(False)

    def read_current(self, tagname):
        '''
        reads the current value of a given tag. 
        Returns: tag_value, datetime
        '''
        point = PIPoint.FindPIPoint(self.piServer, tagname)
        lastData = point.Snapshot()
        return lastData.Value, datetime.strptime(str(lastData.Timestamp), datetime_format)

    def read_range(self, tagname, start_timestamp, end_timestamp, frequency='1h'):
        '''
        I've written this so that you need to give it a datetime object for the start and end timestamps, 
            but the frequency uses the PI nomenclature
        Also, the frequency is optional, so it will default to 1 hour increments
        Returns two lists: tag_values, datetimes
        '''
        point = PIPoint.FindPIPoint(self.piServer, tagname)
        timerange = AFTimeRange(start_timestamp.strftime(
            datetime_format), end_timestamp.strftime(datetime_format))
        span = AFTimeSpan.Parse(frequency)
        interpolated = point.InterpolatedValues(timerange, span, "", False)
        values = []
        timestamps = []
        for event in interpolated:
            values.append(event.Value)
            timestamps.append(datetime.strptime(
                str(event.Timestamp.LocalTime), datetime_format))
        return values, timestamps

    def write(self, tagname, value, timestamp):
        '''
        write a value to a tag at a given timestamp
        Returns: (nothing)
        '''
        writept = PIPoint.FindPIPoint(self.piServer, tagname)
        val = AFValue(value, AFTime(timestamp.strftime(datetime_format)))
        writept.UpdateValue(val, AFUpdateOption.Replace,
                            AFBufferOption.BufferIfPossible)


def makePoint(tag, write_val):
    my_PI_server = PI_server('PIKFRANK')
    defaultVal = my_PI_server.read_current(tag)
    my_PI_server.write(tag, write_val, datetime.now())
    # resets tag value for end event frame trigger
    my_PI_server.write(tag, defaultVal, datetime.now())


#if __name__ == '__main__':
'''
this is a test to make sure things work on your computer; you need to put in the server name and a tag name
if you run this script, it will execute this code, however if you import this file, it will ignore this block
'''

my_PI_server = PI_server('PIKFRANK')  # put your server name here

# def write(tagname, write_value, write_timestamp=None):
#     # if you need write funcitonality, here is the syntax:
#     # write_value = 12345
#     write_timestamp = datetime.now()
#     my_PI_server.write(tagname, write_value, write_timestamp)

tagname = 'ComfortValue'  # 'Status'  # put your tag name here
write_value = 51  # 'New'

if(len(sys.argv) > 1):
    tagname = (sys.argv)[1]
    write_value = (sys.argv)[2]
    print(tagname, write_value)

my_PI_server.write(tagname, write_value, datetime.now())

# starting date -- one day back
start_timestamp = datetime.now() - timedelta(seconds=30)
end_timestamp = datetime.now()  # current time
# start_timestamp + timedelta(days=3) # number of days after
frequency = '5s'
# you can use datetime.now() if you want the current datetime. timedelta only accepts days and seconds, FYI

# read the current value of a tag
value, timestamp = my_PI_server.read_current(tagname)
print('Read current value')
print('Tagname:', tagname)
print('Value:', value, 'Timestamp:', timestamp)

# read an interpolated range of values of a tag
values, timestamps = my_PI_server.read_range(
    tagname, start_timestamp, end_timestamp, frequency)
print('\nRead range with a frequency of', frequency)
print('Tagname:', tagname)

# print out each value
for i in range(len(values)):
    print('Value:', values[i], 'Timestamp:', timestamps[i])

print

# my_PI_server.write(tagname, "Default", datetime.now())

